import "./SectionHeader.css";

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
}) {
  return (
    <header className="header">
      <div className="header__inner">

        <a
          href="#"
          className="header__logo"
        >
          <div className="header__logo-icon">
            ТИМ
          </div>

          <div className="header__logo-text">
            <strong>
              Цифровой объект
            </strong>

            <span>
              учебный проект
            </span>
          </div>
        </a>


        <nav className="header__nav">

          <a href="#object">
            Об объекте
          </a>

          <a href="#media">
            Материалы
          </a>

          <a href="#history">
            История
          </a>

          <a href="#gallery">
            Галерея
          </a>

          <a href="#team">
            Команда
          </a>

        </nav>


        <button
          className="header__button"
          type="button"
        >
          Проекты
        </button>

      </div>
    </header>
  );
}