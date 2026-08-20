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

          <h3>Участник 1</h3>
          <p>Роль в команде</p>
        </div>

        <div className="team-block__member">
          <div className="team-block__avatar">
            Фото
          </div>

          <h3>Участник 2</h3>
          <p>Роль в команде</p>
        </div>

        <div className="team-block__member">
          <div className="team-block__avatar">
            Фото
          </div>

          <h3>Участник 3</h3>
          <p>Роль в команде</p>
        </div>
      </div>
    </LegoSection>
  );
}