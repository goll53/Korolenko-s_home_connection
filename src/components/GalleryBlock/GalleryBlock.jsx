import "./GalleryBlock.css";
import LegoSection from "../LegoSection/LegoSection";
import photo1 from './photo1.JPG';
import photo2 from './photo2.JPG';
import photo3 from './photo3.JPG';
import photo4 from './photo4.JPG';
import photo5 from './photo5.JPG';
import photo6 from './photo6.JPG';
import photo7 from './photo7.JPG';
import photo8 from './photo8.JPG';
import photo9 from './photo9.webp';

export default function GalleryBlock({
  image1 = photo1,
  image2 = photo2,
  image3 = photo3,
  image4 = photo4,
  image5 = photo5,
  image6 = photo6,
  image7 = photo7,
  image8 = photo8,
  image9 = photo9
}) {
  return (
    <LegoSection variant="white">
      <h2 className="gallery-block__title">Галерея</h2>

      <div className="gallery-block">
        {/* Верхний ряд: 3 больших + 1 колонка с 2 маленькими */}
        <div className="gallery-block__top-row">
          <div className="gallery-block__item"><img src={image1} alt="Фото 1" className="gallery-block__img" /></div>
          <div className="gallery-block__item"><img src={image2} alt="Фото 2" className="gallery-block__img" /></div>
          <div className="gallery-block__item"><img src={image3} alt="Фото 3" className="gallery-block__img" /></div>
          
          {/* Стек из двух маленьких фото */}
          <div className="gallery-block__item gallery-block__item--stack">
            <img src={image4} alt="Фото 4" className="gallery-block__img" />
            <img src={image9} alt="Фото 9" className="gallery-block__img" />
          </div>
        </div>

        {/* Нижний ряд: 4 больших */}
        <div className="gallery-block__bottom-row">
          <div className="gallery-block__item"><img src={image5} alt="Фото 5" className="gallery-block__img" /></div>
          <div className="gallery-block__item"><img src={image6} alt="Фото 6" className="gallery-block__img" /></div>
          <div className="gallery-block__item"><img src={image7} alt="Фото 7" className="gallery-block__img" /></div>
          <div className="gallery-block__item"><img src={image8} alt="Фото 8" className="gallery-block__img" /></div>
        </div>
      </div>
    </LegoSection>
  );
}