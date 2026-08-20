import { useState } from "react";

import "./ObjectMediaBlock.css";

import LegoSection from "../LegoSection/LegoSection";



const slides = [
  {
    id: "orthophoto",

    title: "Ортофотоплан",

    description:
      "Здесь разместите ортофотоплан территории объекта.",

    icon: "⌖",

    placeholder:
      "Тут ортофотоплан",
  },

  {
    id: "model",

    title: "3D-модель",

    description:
      "Здесь будет интерактивная 3D-модель объекта.",

    icon: "◇",

    placeholder:
      "Тут 3D-модель",
  },

  {
    id: "point-cloud",

    title: "Облако точек",

    description:
      "Здесь можно разместить облако точек фотограмметрии.",

    icon: "✦",

    placeholder:
      "Тут облако точек",
  },
];


export default function ObjectMediaBlock() {

  const [activeIndex, setActiveIndex] =
    useState(0);


  const activeSlide =
    slides[activeIndex];


  function nextSlide() {

    setActiveIndex((current) => {

      if (
        current ===
        slides.length - 1
      ) {
        return 0;
      }

      return current + 1;

    });

  }


  function previousSlide() {

    setActiveIndex((current) => {

      if (current === 0) {
        return slides.length - 1;
      }

      return current - 1;

    });

  }


  return (
    <LegoSection variant="white">

      <div id="media">



        <div className="object-media">


          {/* Вкладки */}

          <div className="object-media__tabs">

            {slides.map(
              (slide, index) => (

                <button
                  key={slide.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={
                    index === activeIndex
                      ? "object-media__tab object-media__tab--active"
                      : "object-media__tab"
                  }
                >

                  <span>
                    {slide.icon}
                  </span>

                  {slide.title}

                </button>

              )
            )}

          </div>


          {/* Viewer */}

          <div className="object-media__viewer">


            <button
              type="button"
              className="
                object-media__arrow
                object-media__arrow--left
              "
              onClick={previousSlide}
            >
              ←
            </button>


            <div className="object-media__content">

              <div className="object-media__placeholder">

                <div className="object-media__placeholder-icon">
                  {activeSlide.icon}
                </div>

                <strong>
                  {activeSlide.placeholder}
                </strong>

                <span>
                  Замените этот блок
                  настоящим материалом
                </span>

              </div>

            </div>


            <button
              type="button"
              className="
                object-media__arrow
                object-media__arrow--right
              "
              onClick={nextSlide}
            >
              →
            </button>


          </div>


          {/* Нижняя информация */}

          <div className="object-media__info">

            <div>

              <span className="object-media__counter">

                {String(
                  activeIndex + 1
                ).padStart(2, "0")}

                {" / "}

                {String(
                  slides.length
                ).padStart(2, "0")}

              </span>


              <h3>
                {activeSlide.title}
              </h3>


              <p>
                {activeSlide.description}
              </p>

            </div>


            <div className="object-media__dots">

              {slides.map(
                (slide, index) => (

                  <button
                    key={slide.id}
                    type="button"
                    aria-label={
                      slide.title
                    }
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className={
                      index === activeIndex
                        ? "object-media__dot object-media__dot--active"
                        : "object-media__dot"
                    }
                  />

                )
              )}

            </div>

          </div>


        </div>

      </div>

    </LegoSection>
  );
}