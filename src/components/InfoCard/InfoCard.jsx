import "./InfoCard.css";

export default function InfoCard({
  icon,
  title,
  text,
}) {
  return (
    <div className="info-card">
      <div className="info-card__icon">
        {icon}
      </div>

      <div className="info-card__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}