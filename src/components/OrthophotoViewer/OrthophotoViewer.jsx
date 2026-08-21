import { useRef, useState } from "react";

import "./OrthophotoViewer.css";

export default function OrthophotoViewer({
  src,
  alt = "Ортофотоплан",
}) {
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] =
    useState(false);

  const [start, setStart] = useState({
    x: 0,
    y: 0,
  });


  function zoomIn() {
    setScale((value) =>
      Math.min(value + 0.25, 5)
    );
  }


  function zoomOut() {
    setScale((value) => {
      const next =
        Math.max(value - 0.25, 1);

      if (next === 1) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return next;
    });
  }


  function resetView() {
    setScale(1);

    setPosition({
      x: 0,
      y: 0,
    });
  }


  function handleMouseDown(event) {
    if (scale <= 1) {
      return;
    }

    setDragging(true);

    setStart({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  }


  function handleMouseMove(event) {
    if (!dragging) {
      return;
    }

    setPosition({
      x: event.clientX - start.x,
      y: event.clientY - start.y,
    });
  }


  function handleMouseUp() {
    setDragging(false);
  }


  function handleWheel(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
      setScale((value) =>
        Math.min(value + 0.15, 5)
      );
    } else {
      setScale((value) =>
        Math.max(value - 0.15, 1)
      );
    }
  }


  return (
    <div
      ref={containerRef}
      className={
        dragging
          ? "orthophoto-viewer orthophoto-viewer--dragging"
          : "orthophoto-viewer"
      }
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <img
        src={src}
        alt={alt}
        draggable="false"
        className="orthophoto-viewer__image"
        style={{
          transform: `
            translate(
              ${position.x}px,
              ${position.y}px
            )
            scale(${scale})
          `,
        }}
      />


      <div className="orthophoto-viewer__controls">
        <button
          type="button"
          onClick={zoomIn}
        >
          +
        </button>

        <button
          type="button"
          onClick={zoomOut}
        >
          −
        </button>

        <button
          type="button"
          onClick={resetView}
          className="orthophoto-viewer__reset"
        >
          Сброс
        </button>
      </div>


      <div className="orthophoto-viewer__help">
        Колесо — масштаб · Зажмите мышь — перемещение
      </div>
    </div>
  );
}