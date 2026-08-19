import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function ModelBlock() {
  return (
    <LegoSection>
      <SectionHeader
        title="3D-модель"
        subtitle="Разместите здесь интерактивную модель"
      />

      <MediaFrame
        title="3D viewer"
        label="Тут 3D-модель"
      />
    </LegoSection>
  );
}