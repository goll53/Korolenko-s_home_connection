import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function FlightBlock() {
  return (
    <LegoSection variant="gray">
      <SectionHeader
        title="Облёт объекта"
        subtitle="Добавьте видео с беспилотника"
      />

      <MediaFrame
        title="Видеооблёт"
        label="Тут видео облёта"
      />
    </LegoSection>
  );
}