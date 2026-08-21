import "./HistoryBlock.css";
import LegoSection from "../LegoSection/LegoSection";
import photo1 from './photo1.png';
import photo2 from './photo2.png';

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
            <p>Это двухэтажный деревянный дом на каменном цоколе, построенный в начале 1880-х годов.
Усадьба принадлежала нижегородскому архитектору Владимиру Максимовичу Лемке, который с 1882 года служил городовым архитектором города. С сентября 1888 по январь 1896 года в этом флигеле усадьбы с семьёй жил Короленко.</p>
          </div>
          <div className="history-image">
            {/* Правильно: используем переменную photo1 */}
            <img src={photo1} alt="Дом Короленко" />
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="history-divider"></div>

        {/* Второй ряд: картинка слева, текст справа (класс reverse) */}
        <div className="history-row">
          <div className="history-image">
            {/* Правильно: используем переменную photo2 */}
            <img src={photo2} alt="Флигель" />
          </div>
          <div className="history-text">
            <p>Квартира писателя была центром притяжения для нижегородской интеллигенции: здесь бывали учителя, врачи, юристы, представители земства.
В декабре 1889 года здесь состоялась первая встреча Короленко и Максима Горького. В этот период писатель создал рассказы «С двух сторон», «Ночью», «Ат-Даван», «Река играет», «Черкес», очерк «Фабрика смерти» и другие произведения.
После национализации в 1918 году дом стал жилым. В 1978 году провели капитальный ремонт, частично изменивший первоначальную планировку.</p>
          </div>
        </div>
      </div>
    </LegoSection>
  );
}