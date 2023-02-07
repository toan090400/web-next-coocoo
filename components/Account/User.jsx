import Image from "next/image";
import Link from "next/link";
import Image_User from "../../public/Account/user.png";
import Image_Background from "../../public/Account/background.png";
import Image_Background_Mobi from "../../public/Account/background-mobi.png";
const User = () => {
  return (
    <div className="user">
      <div className="user-image">
        <Image className="laptop" src={Image_Background} alt="" />
        <Image className="mobi" src={Image_Background_Mobi} alt="" />
      </div>
      <div className="user-data">
        <div className="data">
          <div className="image">
            <Image src={Image_User} alt="" />
          </div>
          <div className="username">
            <Link href={`/`} className="username-link">
              Username
            </Link>
          </div>
          <div className="infor">
            <div className="follower">
              <span>3 Followers</span>
            </div>
            <div className="following">
              <span>3 Following</span>
            </div>
          </div>
          <div className="button">
            <div className="link">
              <Link href={`/`} className="button-link">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
