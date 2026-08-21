import "./HistoryBlock.css";
import LegoSection from "../LegoSection/LegoSection";

export default function HistoryBlock() {
  return (
    <LegoSection>
      {/* Заголовок и оранжевый тег */}
      <div className="history-header">
        <span className="history-tag">ИСТОРИЯ</span>
        <h1 className="history-title">Дом Короленко</h1>
      </div>

      <div className="history-block">
        {/* Первый ряд: текст слева, картинка справа */}
        <div className="history-row">
          <div className="history-text">
            {/* Вставьте сюда текст из первого синего блока */}
            <p>Это двухэтажный деревянный дом на каменном цоколе, построенный в начале 1880-х годов...</p>
          </div>
          <div className="history-image">
            {/* Вставьте ссылку на первое фото */}
            <img src="photo1.jpg" alt="Дом Короленко" />
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="history-divider"></div>

        {/* Второй ряд: картинка слева, текст справа (класс reverse) */}
        <div className="history-row">
          <div className="history-image">
            {/* Вставьте ссылку на второе фото */}
            <img src="photo2.jpg" alt="Флигель" />
          </div>
          <div className="history-text">
            {/* Вставьте сюда текст из второго синего блока */}
            <p>Квартира писателя была центром притяжения для нижегородской интеллигенции...</p>
          </div>
        </div>
      </div>
    </LegoSection>
  );
}