import "./GalleryBlock.css";
import LegoSection from "../LegoSection/LegoSection";

export default function GalleryBlock() {
  return (
    <LegoSection variant="white">
      
      {/* Бирюзовая обертка */}
      <div className="gallery-block">
        
        {/* Верхний ряд */}
        <div className="gallery-block__item">Тут фото 1</div>
        <div className="gallery-block__item">Тут фото 2</div>
        <div className="gallery-block__item">Тут фото 3</div>
        <div className="gallery-block__item">Тут фото 4</div>

        {/* Нижний ряд */}
        <div className="gallery-block__item">Тут фото 5</div>
        <div className="gallery-block__item">Тут фото 6</div>
        <div className="gallery-block__item">Тут фото 7</div>
        <div className="gallery-block__item">Тут фото 8</div>

      </div>
    </LegoSection>
  );
}