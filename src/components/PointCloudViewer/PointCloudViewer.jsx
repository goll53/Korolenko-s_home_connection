import {
    useEffect,
    useRef,
    useState,
} from "react";

import * as THREE from "three";

import {
    OrbitControls,
} from "three/examples/jsm/controls/OrbitControls.js";

import "./PointCloudViewer.css";


export default function PointCloudViewer({
    src,
    maxPoints = 300000,
}) {
    const containerRef = useRef(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState(null);

    const [pointsCount, setPointsCount] =
        useState(0);


    useEffect(() => {
        const container =
            containerRef.current;

        if (!container) return;


        // =========================
        // SCENE
        // =========================

        const scene =
            new THREE.Scene();

        scene.background =
            new THREE.Color(0x101418);


        // =========================
        // CAMERA
        // =========================

        const camera =
            new THREE.PerspectiveCamera(
                50,
                container.clientWidth /
                container.clientHeight,
                0.01,
                100000
            );


        // =========================
        // RENDERER
        // =========================

        const renderer =
            new THREE.WebGLRenderer({
                antialias: true,
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


        renderer.outputColorSpace =
            THREE.SRGBColorSpace;


        container.appendChild(
            renderer.domElement
        );


        // =========================
        // CONTROLS
        // =========================

        const controls =
            new OrbitControls(
                camera,
                renderer.domElement
            );


        controls.enableDamping = true;
        controls.dampingFactor = 0.06;

        controls.enableRotate = true;
        controls.enablePan = true;
        controls.enableZoom = true;


        // =========================
        // OBJECTS
        // =========================

        let pointCloud = null;
        let grid = null;


        // =========================
        // LOAD PTS
        // =========================

        async function loadPTS() {
            try {
                setLoading(true);
                setError(null);


                const response =
                    await fetch(src);


                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}`
                    );
                }


                const text =
                    await response.text();


                const lines =
                    text
                        .split(/\r?\n/)
                        .filter(
                            (line) =>
                                line.trim().length > 0
                        );


                let startIndex = 0;


                // В PTS первая строка часто
                // содержит количество точек
                const firstValues =
                    lines[0]
                        ?.trim()
                        .split(/\s+/);


                if (
                    firstValues &&
                    firstValues.length === 1 &&
                    !Number.isNaN(
                        Number(firstValues[0])
                    )
                ) {
                    startIndex = 1;
                }


                const availablePoints =
                    lines.length -
                    startIndex;


                const step =
                    Math.max(
                        1,
                        Math.ceil(
                            availablePoints /
                            maxPoints
                        )
                    );


                // СНАЧАЛА обычные JS Number.
                // Не Float32!

                const rawPoints = [];


                let minX = Infinity;
                let minY = Infinity;
                let minZ = Infinity;

                let maxX = -Infinity;
                let maxY = -Infinity;
                let maxZ = -Infinity;


                for (
                    let i = startIndex;
                    i < lines.length;
                    i += step
                ) {
                    const values =
                        lines[i]
                            .trim()
                            .split(/\s+/)
                            .map(Number);


                    if (
                        values.length < 3
                    ) {
                        continue;
                    }


                    const x = values[0];
                    const y = values[1];
                    const z = values[2];


                    if (
                        !Number.isFinite(x) ||
                        !Number.isFinite(y) ||
                        !Number.isFinite(z)
                    ) {
                        continue;
                    }


                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    minZ = Math.min(minZ, z);

                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                    maxZ = Math.max(maxZ, z);


                    rawPoints.push({
                        x,
                        y,
                        z,
                        values,
                    });
                }


                if (!rawPoints.length) {
                    throw new Error(
                        "В PTS не найдено точек"
                    );
                }


                // =========================
                // CENTER
                // =========================

                const centerX =
                    (minX + maxX) / 2;

                const centerY =
                    (minY + maxY) / 2;

                const centerZ =
                    (minZ + maxZ) / 2;


                console.log(
                    "PTS ORIGINAL CENTER:",
                    centerX,
                    centerY,
                    centerZ
                );


                console.log(
                    "PTS ORIGINAL SIZE:",
                    maxX - minX,
                    maxY - minY,
                    maxZ - minZ
                );


                const positions = [];
                const colors = [];


                // =========================
                // CONVERT AFTER CENTERING
                // =========================

                const looksLikeGeographic =
                    Math.abs(centerX) <= 180 &&
                    Math.abs(centerY) <= 90;


                console.log(
                    "COORDINATE TYPE:",
                    looksLikeGeographic
                        ? "longitude / latitude"
                        : "projected"
                );
rawPoints.forEach(
  ({
    x,
    y,
    z,
    values,
  }) => {

    let localX;
    let localY;
    let localZ;


    if (looksLikeGeographic) {

      /*
        X = longitude
        Y = latitude
        Z = elevation
      */

      const latitudeRad =
        centerY *
        Math.PI /
        180;


      const metersPerDegreeLatitude =
        111320;


      const metersPerDegreeLongitude =
        111320 *
        Math.cos(latitudeRad);


      localX =
        (x - centerX) *
        metersPerDegreeLongitude;


      localZ =
        (y - centerY) *
        metersPerDegreeLatitude;


      localY =
        z - centerZ;

    } else {

      /*
        Обычная плоская
        система координат.
      */

      localX =
        x - centerX;

      localZ =
        y - centerY;

      localY =
        z - centerZ;
    }


    positions.push(
      localX,
      localY,
      -localZ
    );


    // Цвет

    let r = 37;
    let g = 157;
    let b = 168;


    if (values.length >= 7) {

      /*
        Твой формат:

        longitude
        latitude
        elevation
        intensity
        R
        G
        B
      */

      r = values[4];
      g = values[5];
      b = values[6];

    } else if (
      values.length >= 6
    ) {

      r = values[3];
      g = values[4];
      b = values[5];
    }


    colors.push(
      normalizeColor(r),
      normalizeColor(g),
      normalizeColor(b)
    );
  }
);


                // =========================
                // GEOMETRY
                // =========================

                const geometry =
                    new THREE.BufferGeometry();


                geometry.setAttribute(
                    "position",

                    new THREE
                        .Float32BufferAttribute(
                            positions,
                            3
                        )
                );


                geometry.setAttribute(
                    "color",

                    new THREE
                        .Float32BufferAttribute(
                            colors,
                            3
                        )
                );


                geometry.computeBoundingBox();
                geometry.computeBoundingSphere();


                const sphere =
                    geometry.boundingSphere;


                const radius =
                    sphere?.radius || 10;


                console.log(
                    "POINT CLOUD RADIUS:",
                    radius
                );


                // =========================
                // MATERIAL
                // =========================

                const pointSize =
                    Math.max(
                        radius / 500,
                        0.03
                    );


                const material =
                    new THREE.PointsMaterial({
                        size: pointSize,

                        vertexColors: true,

                        sizeAttenuation: true,

                        transparent: false,
                    });


                pointCloud =
                    new THREE.Points(
                        geometry,
                        material
                    );


                scene.add(
                    pointCloud
                );


                // =========================
                // GRID
                // =========================

                const gridSize =
                    Math.max(
                        radius * 3,
                        10
                    );


                grid =
                    new THREE.GridHelper(
                        gridSize,
                        30,
                        0x259da8,
                        0x29363c
                    );


                /*
                  Облако после перестановки
                  координат стоит Y вверх,
                  GridHelper уже лежит в XZ.
                */

                grid.position.y =
                    -radius * 0.15;


                scene.add(grid);


                // =========================
                // CAMERA
                // =========================

                camera.position.set(
                    radius * 1.4,
                    radius * 0.9,
                    radius * 1.4
                );


                camera.near =
                    Math.max(
                        radius / 10000,
                        0.001
                    );


                camera.far =
                    Math.max(
                        radius * 100,
                        1000
                    );


                camera.updateProjectionMatrix();


                controls.target.set(
                    0,
                    0,
                    0
                );


                controls.minDistance =
                    radius * 0.02;


                controls.maxDistance =
                    radius * 20;


                controls.update();


                setPointsCount(
                    positions.length / 3
                );


                setLoading(false);
            }

            catch (loadError) {
                console.error(
                    "PTS ERROR:",
                    loadError
                );


                setError(
                    "Не удалось загрузить облако точек"
                );


                setLoading(false);
            }
        }


        loadPTS();


        // =========================
        // ANIMATION
        // =========================

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


        // =========================
        // RESIZE
        // =========================

        const resizeObserver =
            new ResizeObserver(() => {

                const width =
                    container.clientWidth;

                const height =
                    container.clientHeight;


                if (
                    !width ||
                    !height
                ) {
                    return;
                }


                camera.aspect =
                    width / height;


                camera
                    .updateProjectionMatrix();


                renderer.setSize(
                    width,
                    height
                );
            });


        resizeObserver.observe(
            container
        );


        // =========================
        // CLEANUP
        // =========================

        return () => {
            resizeObserver.disconnect();


            cancelAnimationFrame(
                animationFrameId
            );


            controls.dispose();


            if (pointCloud) {
                pointCloud
                    .geometry
                    .dispose();


                pointCloud
                    .material
                    .dispose();


                scene.remove(
                    pointCloud
                );
            }


            if (grid) {
                scene.remove(grid);

                grid.geometry.dispose();

                if (
                    Array.isArray(
                        grid.material
                    )
                ) {
                    grid.material.forEach(
                        (material) =>
                            material.dispose()
                    );
                } else {
                    grid.material.dispose();
                }
            }


            renderer.dispose();


            if (
                renderer.domElement
                    .parentNode ===
                container
            ) {
                container.removeChild(
                    renderer.domElement
                );
            }
        };

    }, [src, maxPoints]);


    return (
        <div className="point-cloud-viewer">

            <div
                ref={containerRef}
                className="point-cloud-viewer__canvas"
            />


            {loading && (
                <div className="point-cloud-viewer__loading">

                    <div className="point-cloud-viewer__spinner" />

                    <strong>
                        Загружаем облако точек
                    </strong>

                    <span>
                        Читаем PTS...
                    </span>

                </div>
            )}


            {error && (
                <div className="point-cloud-viewer__error">
                    {error}
                </div>
            )}


            {!loading &&
                !error && (
                    <>
                        <div className="point-cloud-viewer__info">

                            {pointsCount
                                .toLocaleString(
                                    "ru-RU"
                                )}

                            {" точек"}

                        </div>


                        <div className="point-cloud-viewer__help">

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
                    </>
                )}

        </div>
    );
}


function normalizeColor(
    value
) {
    if (
        !Number.isFinite(value)
    ) {
        return 1;
    }


    if (value > 1) {
        return Math.min(
            value / 255,
            1
        );
    }


    return Math.max(
        value,
        0
    );
}