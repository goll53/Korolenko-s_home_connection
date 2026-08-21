import "./HeroBlock.css";
import myPhoto from './main_photo.jpg';

export default function HeroBlock({
  badge = "ЦИФРОВОЙ ДВОЙНИК",
  title = "Дом Короленко",
  description = "Дом Короленко - часть усадебного комплекса, созданного архитектором Лемке в 1890-е годы",
  image = myPhoto,
  primaryButton = "Смотреть видео",
  secondaryButton = "История дома",

  authors = [
    { role: "Менеджер", name: "Маранова Милослава" },
    { role: "Разработчики", name: "Харюк Андрей " },
    { role: "Дизайнер", name: "Николаенко Ирина" },
  ],
}) {
  return (

    <div className="hero-wrapper">
      
      {/* Бирюзовый баннер */}
      <section className="hero-main">
        <div className="hero-content">
          <div className="hero-badge">{badge}</div>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <button className="hero-btn">{primaryButton}</button>
            <button className="hero-btn">{secondaryButton}</button>
          </div>
        </div>
        
        <div className="hero-visual">
          {image ? (
            <img src={image} alt={title} className="hero-img" />
          ) : (
            <div className="hero-placeholder">
              <span>Здесь будет фото</span>
            </div>
          )}
        </div>
      </section>

      {/* Секция с авторами ПОЛНОСТЬЮ УДАЛЕНА! */}

    </div>
  );
}