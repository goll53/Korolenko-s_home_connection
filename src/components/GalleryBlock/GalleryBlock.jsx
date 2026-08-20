import "./GalleryBlock.css";

import LegoSection from "../LegoSection/LegoSection";

export default function GalleryBlock() {
  return (
    <LegoSection variant="white">


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