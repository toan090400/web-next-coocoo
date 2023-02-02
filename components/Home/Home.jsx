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
const Home = () => {
  return (
    <div className="main">
      <Frame />
      <HotDrops />
      <TopList />
      <DsicoverMore />
      <Wizard />
    </div>
  );
};

export default Home;
