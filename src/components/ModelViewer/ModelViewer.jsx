import { useEffect, useRef, useState } from "react";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

import "./ModelViewer.css";


export default function ModelViewer({
  src = "./models/house/model.fbx",
}) {
  const containerRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);


  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }


    /* ==============================
       SCENE
    ============================== */

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(
      0xf3f7f8
    );


    /* ==============================
       CAMERA
    ============================== */

    const camera =
      new THREE.PerspectiveCamera(
        45,
        container.clientWidth /
          container.clientHeight,
        0.1,
        100000
      );


    camera.position.set(
      10,
      10,
      10
    );


    /* ==============================
       RENDERER
    ============================== */

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });


    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );


    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );


    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type =
      THREE.PCFSoftShadowMap;


    renderer.outputColorSpace =
      THREE.SRGBColorSpace;


    container.appendChild(
      renderer.domElement
    );


    /* ==============================
       CONTROLS
    ============================== */

    const controls =
      new OrbitControls(
        camera,
        renderer.domElement
      );


    controls.enableDamping = true;

    controls.dampingFactor = 0.06;


    controls.enablePan = true;

    controls.enableZoom = true;

    controls.enableRotate = true;


    controls.minDistance = 1;

    controls.maxDistance = 50000;


    /* ==============================
       LIGHT
    ============================== */

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        1.8
      );


    scene.add(
      ambientLight
    );


    const directionalLight =
      new THREE.DirectionalLight(
        0xffffff,
        2.5
      );


    directionalLight.position.set(
      20,
      30,
      20
    );


    directionalLight.castShadow =
      true;


    scene.add(
      directionalLight
    );


    const secondLight =
      new THREE.DirectionalLight(
        0xffffff,
        1
      );


    secondLight.position.set(
      -20,
      10,
      -20
    );


    scene.add(
      secondLight
    );


    /* ==============================
       GRID
    ============================== */

    const grid =
      new THREE.GridHelper(
        100,
        40,
        0x259da8,
        0xd6e3e5
      );


    grid.material.opacity = 0.3;

    grid.material.transparent = true;


    scene.add(grid);


    /* ==============================
       FBX
    ============================== */

    const loader =
      new FBXLoader();


    let loadedModel = null;


    loader.load(
      src,

      (model) => {
        loadedModel = model;


        model.traverse(
          (child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;


              if (child.material) {
                child.material.side =
                  THREE.DoubleSide;
              }
            }
          }
        );


        scene.add(model);


        fitCameraToObject(
          camera,
          controls,
          model
        );


        setLoading(false);
      },


      (event) => {
        if (!event.total) {
          return;
        }


        const value =
          Math.round(
            (event.loaded /
              event.total) *
              100
          );


        setProgress(value);
      },


      (loadError) => {
        console.error(
          "Ошибка загрузки FBX:",
          loadError
        );

        setError(
          "Не удалось загрузить 3D-модель"
        );

        setLoading(false);
      }
    );


    /* ==============================
       ANIMATION
    ============================== */

    let animationFrameId;


    function animate() {
      animationFrameId =
        requestAnimationFrame(
          animate
        );


      controls.update();


      renderer.render(
        scene,
        camera
      );
    }


    animate();


    /* ==============================
       RESIZE
    ============================== */

    const resizeObserver =
      new ResizeObserver(() => {
        if (!container) {
          return;
        }


        const width =
          container.clientWidth;

        const height =
          container.clientHeight;


        camera.aspect =
          width / height;


        camera.updateProjectionMatrix();


        renderer.setSize(
          width,
          height
        );
      });


    resizeObserver.observe(
      container
    );


    /* ==============================
       CLEANUP
    ============================== */

    return () => {
      resizeObserver.disconnect();

      cancelAnimationFrame(
        animationFrameId
      );


      controls.dispose();


      if (loadedModel) {
        loadedModel.traverse(
          (child) => {
            if (!child.isMesh) {
              return;
            }


            child.geometry?.dispose();


            if (
              Array.isArray(
                child.material
              )
            ) {
              child.material.forEach(
                (material) =>
                  material.dispose()
              );
            } else {
              child.material?.dispose();
            }
          }
        );
      }


      renderer.dispose();


      if (
        renderer.domElement
          .parentNode === container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, [src]);


  return (
    <div className="model-viewer">

      <div
        ref={containerRef}
        className="model-viewer__canvas"
      />


      {loading && (
        <div className="model-viewer__loading">

          <div className="model-viewer__spinner" />

          <strong>
            Загружаем 3D-модель
          </strong>

          <span>
            {progress}%
          </span>

        </div>
      )}


      {error && (
        <div className="model-viewer__error">
          {error}
        </div>
      )}


      {!loading && !error && (
        <div className="model-viewer__help">

          <span>
            🖱 ЛКМ — вращение
          </span>

          <span>
            Колесо — масштаб
          </span>

          <span>
            ПКМ — перемещение
          </span>

        </div>
      )}

    </div>
  );
}


/* ==============================
   CAMERA FIT
============================== */

function fitCameraToObject(
  camera,
  controls,
  object
) {
  const box =
    new THREE.Box3().setFromObject(
      object
    );


  const size =
    box.getSize(
      new THREE.Vector3()
    );


  const center =
    box.getCenter(
      new THREE.Vector3()
    );


  const maxSize =
    Math.max(
      size.x,
      size.y,
      size.z
    );


  const fitHeightDistance =
    maxSize /
    (
      2 *
      Math.atan(
        (Math.PI *
          camera.fov) /
          360
      )
    );


  const fitWidthDistance =
    fitHeightDistance /
    camera.aspect;


  const distance =
    1.4 *
    Math.max(
      fitHeightDistance,
      fitWidthDistance
    );


  const direction =
    new THREE.Vector3(
      1,
      0.7,
      1
    ).normalize();


  camera.position.copy(
    center
  );


  camera.position.add(
    direction.multiplyScalar(
      distance
    )
  );


  camera.near =
    distance / 100;


  camera.far =
    distance * 100;


  camera.updateProjectionMatrix();


  controls.target.copy(
    center
  );


  controls.maxDistance =
    distance * 10;


  controls.update();
}