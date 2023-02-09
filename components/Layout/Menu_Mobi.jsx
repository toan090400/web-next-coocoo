import Image from "next/image";
import Link from "next/link";
import vector from "../../public/layout/menu/vector.png";
import user_menu from "../../public/layout/menu/user-menu.png";
const Menu_Mobi = () => {
  return (
    <div className="menu-mobi" id="menu-mobi">
      <div className="menu-mobi-chill">
        <div className="menu-mobi__are1">
          <div className="menu-mobi__list">
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/item">Rankings</Link>
            <Link href="/">About</Link>
          </div>
        </div>
        <div className="menu-mobi__are2">
          <div className="form-controll">
            <div className="input">
              <input type="text" placeholder="Search" />
              <div className="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
                    fill="#6A6A6A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-mobi__are3">
          <div className="menu-mobi__user">
            <div className="user">
              <Image src={user_menu} alt="" />
            </div>
          </div>
          <div className="menu-mobi__create">
            <div className="button">
              <button>Create</button>
            </div>
            <div className="icon">
              <Image src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu_Mobi;
