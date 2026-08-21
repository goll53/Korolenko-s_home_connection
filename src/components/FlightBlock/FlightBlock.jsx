import "./FlightBlock.css";
import LegoSection from "../LegoSection/LegoSection";

export default function FlightBlock() {
  return (
    <LegoSection variant="gray">
      <div className="flight-block">
        <h2 className="flight-block__title">Видеооблёт Дома Короленко</h2>
        <p className="flight-block__subtitle">
          Посмотрите на объект с разных ракурсов – от общего вида до деталей цифровой модели
        </p>

        {/* Темный плеер */}
        <div className="flight-block__player">
          <button className="flight-block__play-btn" type="button">
            <div className="flight-block__play-icon"></div>
          </button>
        </div>
      </div>
    </LegoSection>
  );
}