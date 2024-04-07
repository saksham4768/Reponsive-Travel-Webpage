import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import GetApp from "@/Components/GetApp";
import Guide from "@/Components/Guide";
import MainContent from "@/Components/MainContent";

export default function Home() {
  return (
      <>
        <MainContent/>
        <Camp/>
        <Guide/>
        <Features/>
        <GetApp/>
      </>
  );
}
