import LegoSection from "../LegoSection/LegoSection";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function FlightBlock() {
  return (
    <LegoSection variant="gray">

      <MediaFrame
        title="Видеооблёт"
        label="Тут видео облёта"
      />
    </LegoSection>
  );
}