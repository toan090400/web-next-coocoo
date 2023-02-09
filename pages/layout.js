import Menu from "../components/Layout/Menu";
import Footer from "../components/Layout/Footer";
import Finall from "../components/Layout/Finall";
const Layout = ({ children }) => {
  return (
    <div className="coocoo" id="coocoo">
      <Menu />
      {children}
      <Footer />
      <Finall />
    </div>
  );
};

export default Layout;
