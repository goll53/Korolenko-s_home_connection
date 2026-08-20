import "./HeroBlock.css";

export default function HeroBlock({
  badge = "Объект культурного наследия",

  title = "Название вашего объекта",

  description =
    "Кратко расскажите об объекте: что это за здание, где оно находится и почему оно интересно.",

  location = "Город / регион",

  years = "Год постройки",

  team = "Название команды",

  image = null,

  primaryButton = "Исследовать объект",

  secondaryButton = "Подробнее",
}) {
  return (
    <section
      className="hero-block"
      id="object"
    >
      <div className="hero-block__container">

        {/* ЛЕВАЯ ЧАСТЬ */}

        <div className="hero-block__content">

          <div className="hero-block__badge">
            {badge}
          </div>


          <h1 className="hero-block__title">
            {title}
          </h1>


          <p className="hero-block__description">
            {description}
          </p>


          <div className="hero-block__info">

            <div className="hero-block__info-item">
              <div className="hero-block__info-icon">
                ⌖
              </div>

              <div>
                <span>
                  Расположение
                </span>

                <strong>
                  {location}
                </strong>
              </div>
            </div>


            <div className="hero-block__info-item">
              <div className="hero-block__info-icon">
                ◷
              </div>

              <div>
                <span>
                  Период
                </span>

                <strong>
                  {years}
                </strong>
              </div>
            </div>


            <div className="hero-block__info-item">
              <div className="hero-block__info-icon">
                ♙
              </div>

              <div>
                <span>
                  Команда
                </span>

                <strong>
                  {team}
                </strong>
              </div>
            </div>

          </div>


          <div className="hero-block__actions">

            <a
              href="#media"
              className="
                hero-block__button
                hero-block__button--primary
              "
            >
              {primaryButton}
            </a>


            <button
              type="button"
              className="
                hero-block__button
                hero-block__button--secondary
              "
            >
              {secondaryButton}
            </button>

          </div>

        </div>


        {/* ПРАВАЯ ЧАСТЬ */}

        <div className="hero-block__visual">

          {image ? (
            <img
              src={image}
              alt={title}
              className="hero-block__image"
            />
          ) : (
            <div className="hero-block__placeholder">

              <div className="hero-block__placeholder-icon">
                ▧
              </div>

              <strong>
                <img src="/main_photo.jpg"
                alt="Главное фото объекта" />
              </strong>

              <span>
                Добавьте фотографию здания
              </span>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}