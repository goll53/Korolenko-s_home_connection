import "./HistoryBlock.css";

import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import InfoCard from "../InfoCard/InfoCard";

export default function HistoryBlock() {
  return (
    <LegoSection>
      <SectionHeader
        title="История объекта"
        subtitle="Расскажите, чем интересен ваш объект"
      />

      <div className="history-block">
        <InfoCard
          icon="⌂"
          title="Когда построен"
          text="Добавьте дату строительства"
        />

        <InfoCard
          icon="👤"
          title="Кто владел"
          text="Добавьте информацию о владельце"
        />

        <InfoCard
          icon="✦"
          title="Почему важен"
          text="Добавьте историческую ценность"
        />
      </div>
    </LegoSection>
  );
}