import LegoSection from "../LegoSection/LegoSection";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function TourBlock() {
  return (
    <LegoSection variant="gray">

      <MediaFrame
        title="Экскурсия"
        label="Тут виртуальная экскурсия"
      />
    </LegoSection>
  );
}