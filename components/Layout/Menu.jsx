import Image from "next/image";
import Link from "next/link";

import logo from "../../public/layout/menu/logo.png";
import search from "../../public/layout/menu/search.png";
import vector from "../../public/layout/menu/vector.png";
import user_menu from "../../public/layout/menu/user-menu.png";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__are1">
          <div className="menu__logo">
            <Image src={logo} alt="" />
          </div>
          <div className="menu__list">
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/item">Rankings</Link>
            <Link href="/">About</Link>
          </div>
          <div className="menu__bar">
            <p>&#9776;</p>
          </div>
        </div>
        <div className="menu__are2">
          <form action="">
            <Image src={search} alt="" />
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className="menu__are3">
          <div className="menu__user">
            <button>Create</button>
            <Image src={user_menu} alt="" />
            <Image src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
