import "./SectionHeader.css";

export default function SectionHeader() {
  return (
    <header className="header">
      <div className="header__inner">

        <a href="#" className="header__logo">
          {/* Здесь потом будет картинка */}
          <div className="header__logo-text">
            <strong>ТИМ-юниоры</strong>
            <span>ТИМ-юниоры · Дом Короленко</span>
          </div>
        </a>

        <nav className="header__nav">
          <a href="#home" className="header__nav-link">Главная</a>
          <a href="#video" className="header__nav-link active">Видеооблёт</a>
          <a href="#gallery" className="header__nav-link">Галерея</a>
          <a href="#history" className="header__nav-link">История</a>
        </nav>

      </div>
    </header>
  );
}