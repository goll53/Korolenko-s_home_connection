import LegoSection from "../LegoSection/LegoSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import MediaFrame from "../MediaFrame/MediaFrame";

export default function OrthophotoBlock() {
  return (
    <LegoSection variant="gray">
      <SectionHeader
        title="Ортофотоплан"
        subtitle="Добавьте ортофотоплан вашего объекта"
      />

      <MediaFrame
        title="Ортофотоплан"
        label="Тут ортофотоплан"
      />
    </LegoSection>
  );
}