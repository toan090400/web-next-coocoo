import Menu from "../components/Layout/Menu";
import Footer from "../components/Layout/Footer";
import Finall from "../components/Layout/Finall";
const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
      <Finall />
    </>
  );
};

export default Layout;
