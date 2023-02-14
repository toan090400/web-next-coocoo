import Image from "next/image";
import Link from "next/link";
import Menu_Mobi from "./Menu_Mobi";
import User from "./User/User";
import logo from "../../public/layout/menu/logo.png";
import search from "../../public/layout/menu/search.png";
import vector from "../../public/layout/menu/vector.png";
import user_menu from "../../public/layout/menu/user-menu.png";
const Menu = () => {
  const handlerBar = () => {
    const menu_mobi = document.querySelector("#menu-mobi");
    menu_mobi.classList.toggle("open");
    const menu_user = document.querySelector("#user-menu");
    menu_user.classList.remove("open");
  };
  const handlerUser = () => {
    const menu_user = document.querySelector("#user-menu");
    menu_user.classList.toggle("open");
  };
  const handlerChange = () => {
    const change = document.querySelector("#coocoo");
    change.classList.toggle("change");
  };
  return (
    <>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__are1">
            <div className="menu__logo">
              <Link href={`/`}>
                <Image src={logo} alt="" />
              </Link>
            </div>
            <div className="menu__list">
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/item">Rankings</Link>
              <Link href="/privacy-policy">About</Link>
            </div>
            <div className="menu__bar">
              <p onClick={handlerBar}>&#9776;</p>
            </div>
          </div>
          <div className="menu__are2">
            <form action="">
              <div className="image">
                <Image src={search} alt="" />
              </div>

              <div className="input">
                <input type="text" placeholder="Search" />
              </div>
            </form>
          </div>
          <div className="menu__are3">
            <div className="menu__user">
              <Link href={`/create`}>Create</Link>
              <Image onClick={handlerUser} src={user_menu} alt="user_menu" />
              <Image onClick={handlerChange} src={vector} alt="vector" />
            </div>
          </div>
        </div>
        <Menu_Mobi />
        <User />
      </div>
    </>
  );
};

export default Menu;
