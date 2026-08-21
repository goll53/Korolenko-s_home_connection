import "./TeamBlock.css";

import LegoSection from "../LegoSection/LegoSection";

export default function TeamBlock() {
  return (
    <LegoSection variant="gray">

      <div className="team-block">
        <div className="team-block__member">
          <div className="team-block__avatar">
            Фото
          </div>

          <h3>Маранова Милослава</h3>
          <p>Менеджер</p>
        </div>

        <div className="team-block__member">
          <div className="team-block__avatar">
            Фото
          </div>

          <h3>Николаенко Ирина</h3>
          <p>Дизайнер</p>
        </div>

        <div className="team-block__member">
          <div className="team-block__avatar">
            Фото
          </div>

          <h3>Харюк Андрей</h3>
          <p>Программист</p>
        </div>
      </div>
    </LegoSection>
  );
}