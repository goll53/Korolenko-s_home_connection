import "./TeamBlock.css";
import LegoSection from "../LegoSection/LegoSection";
import photo1 from './andrey.jpg'; // Добавлено .png или .jpg
import photo2 from './ira.jpg';
import photo3 from './mila.jpg';

export default function TeamBlock() {
  return (
    <LegoSection variant="gray"> 
      <div className="team-block">
        {/* Милослава (mila) - photo3 */}
        <div className="team-block__member">
          <div className="team-block__avatar">
            <img src={photo3} alt="Маранова Милослава" className="team-block__avatar-img" />
          </div>
          <h3>Маранова Милослава</h3>
          <p>Менеджер</p>
        </div>

        {/* Ирина (ira) - photo2 */}
        <div className="team-block__member">
          <div className="team-block__avatar">
            <img src={photo2} alt="Николаенко Ирина" className="team-block__avatar-img" />
          </div>
          <h3>Николаенко Ирина</h3>
          <p>Дизайнер</p>
        </div>

        {/* Андрей (andrey) - photo1 */}
        <div className="team-block__member">
          <div className="team-block__avatar">
            <img src={photo1} alt="Харюк Андрей" className="team-block__avatar-img" />
          </div>
          <h3>Харюк Андрей</h3>
          <p>Программист</p>
        </div>
      </div>
    </LegoSection>
  );
}