import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function TourBlock() {
  return (
    <LegoSection variant="gray">
      <SectionHeader
        title="Виртуальная экскурсия"
        subtitle="Добавьте точки перемещения по объекту"
      />

      <MediaFrame
        title="Экскурсия"
        label="Тут виртуальная экскурсия"
      />
    </LegoSection>
  );
}