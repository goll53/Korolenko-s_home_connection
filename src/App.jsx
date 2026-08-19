import Header from "./components/SectionHeader/SectionHeader";
import FlightBlock from "./components/FlightBlock/FlightBlock";
import OrthophotoBlock from "./components/OrthophotoBlock/OrthophotoBlock";
import ModelBlock from "./components/ModelBlock/ModelBlock";
import PointCloudBlock from "./components/PointCloudBlock/PointCloudBlock";
import GalleryBlock from "./components/GalleryBlock/GalleryBlock";
import HistoryBlock from "./components/HistoryBlock/HistoryBlock";
import TeamBlock from "./components/TeamBlock/TeamBlock";
import TourBlock from "./components/TourBlock/TourBlock";

export default function App() {
  return (
    <>
      <Header />

      <main>

        <FlightBlock />

        <OrthophotoBlock />

        <ModelBlock />

        <PointCloudBlock />

        <GalleryBlock />

        <HistoryBlock />

        <TeamBlock />

        <TourBlock />
      </main>
    </>
  );
}