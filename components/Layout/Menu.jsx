import style from "../../styles/Layout/Layout.module.scss";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/layout/menu/logo.png";
import search from "../../public/layout/menu/search.png";
import vector from "../../public/layout/menu/vector.png";
import user_menu from "../../public/layout/menu/user-menu.png";
const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.container}>
        <div className={style.are1}>
          <div className={style.logo}>
            <Image src={logo} alt="" />
          </div>
          <div className={style.list}>
            <Link href="/item">Marketplace</Link>
            <Link href="/">Rankings</Link>
            <Link href="/">About</Link>
          </div>
          <div className={style.bar}>
            <p>&#9776;</p>
          </div>
        </div>
        <div className={style.are2}>
          <form action="">
            <Image src={search} alt="" />
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={style.are3}>
          <div className={style.user}>
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
