import Header from "./components/SectionHeader/SectionHeader";

import HeroBlock from "./components/HeroBlock/HeroBlock";
import FlightBlock from "./components/FlightBlock/FlightBlock";
import ObjectMediaBlock from "./components/ObjectMediaBlock/ObjectMediaBlock";
import GalleryBlock from "./components/GalleryBlock/GalleryBlock";
import HistoryBlock from "./components/HistoryBlock/HistoryBlock";
import TeamBlock from "./components/TeamBlock/TeamBlock";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBlock />

        <FlightBlock />

        <ObjectMediaBlock />

        <HistoryBlock />

        <GalleryBlock />

        <TeamBlock />
      </main>
    </>
  );
}