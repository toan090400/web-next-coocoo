import Image from "next/image";
import Link from "next/link";
import user_menu from "../../../public/layout/menu/user-menu/user-menu-show.png";
import Icon1 from "./Icon-1";
import Icon2 from "./Icon-2";
import Icon3 from "./Icon-3";
import Icon4 from "./Icon-4";
import Icon5 from "./Icon-5";
const User = () => {
  return (
    <div className="user-menu" id="user-menu">
      <div className="user__chill">
        <div className="user__are1">
          <div className="user__image">
            <Image src={user_menu} alt="user_menu" />
          </div>
          <div className="user__text">
            <div className="username">
              <span>USER NAME</span>
            </div>
            <div className="data">
              <div className="text-1">
                <span>52fs5ge5g45sov45a</span>
              </div>
              <div className="text-2">
                <Icon1 />
              </div>
            </div>
          </div>
        </div>
        <div className="user__are2">
          <div className="balance__image">
            <div className="image-chill">
              <Icon2 />
            </div>
          </div>
          <div className="balance__text">
            <div className="balance">
              <span>Balance</span>
            </div>
            <div className="data">
              <div className="text-1">
                <span>5.000 BNB</span>
              </div>
              <div className="text-2">
                <Icon3 />
              </div>
            </div>
          </div>
        </div>
        <div className="user__are3">
          <div className="account">
            <div className="account__image">
              <Icon4 />
            </div>
            <div className="account__text">
              <Link href={`/account`}>My account</Link>
            </div>
          </div>
          <div className="logout">
            <div className="logout__image">
              <Icon5 />
            </div>
            <div className="logout__text">
              <span>Sign out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
