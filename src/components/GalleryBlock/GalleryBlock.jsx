import "./GalleryBlock.css";

import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function GalleryBlock() {
  return (
    <LegoSection variant="white">
      <SectionHeader
        title="Фотогалерея"
        subtitle="Добавьте фотографии объекта"
      />

      <div className="gallery-block">
        <div className="gallery-block__item">
          Тут фото 1
        </div>

        <div className="gallery-block__item">
          Тут фото 2
        </div>

        <div className="gallery-block__item">
          Тут фото 3
        </div>

        <div className="gallery-block__item">
          Тут фото 4
        </div>
      </div>
    </LegoSection>
  );
}