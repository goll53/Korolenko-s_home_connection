import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function PointCloudBlock() {
  return (
    <LegoSection>
      <SectionHeader
        title="Облако точек"
        subtitle="Добавьте данные лазерного сканирования или фотограмметрии"
      />

      <MediaFrame
        title="Point Cloud Viewer"
        label="Тут облако точек"
      />
    </LegoSection>
  );
}