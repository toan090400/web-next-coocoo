import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
// menu
import Menu from "./Menu";
// frame
import Frame from "./Frame";
// hotDrops
import HotDrops from "./HotDrops";
// topList
import TopList from "./TopList";
// discoverMore
import DsicoverMore from "./DiscoverMore";
// wizard
import Wizard from "./Wizard";
// footer
import Footer from "./Footer";
// finall
import Finall from "./Finall";
const Home = () => {
  return (
    <div className="main">
      <Menu />
      <Frame />
      <HotDrops />
      <TopList />
      <DsicoverMore />
      <Wizard />
      <Footer />
      <Finall />
    </div>
  );
};

export default Home;
