import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
// footer
import logoFooter from "../../public/home/footer/logo.png";
import dis from "../../public/home/footer/dis.png";
import inta from "../../public/home/footer/inta.png";
import tw1 from "../../public/home/footer/tw1.png";
import tw2 from "../../public/home/footer/tw2.png";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.conatiner}>
        <div className={style.are1}>
          <div className={style.logo}>
            <Image src={logoFooter} alt="" />
          </div>
          <div className={style.text}>
            <p>
              The largest digital marketplace for crypto collectibles and
              non-fungible tokens (NFTs) on the Binance Smart Cahin. Create,
              collect, sell, and showcase exclusive digital items.
            </p>
          </div>
          <div className={style.icon}>
            <Image className={style.tw1} src={tw1} alt="" />
            <Image className={style.tw2} src={tw2} alt="" />
            <Image className={style.dis} src={dis} alt="" />
            <Image src={inta} alt="" />
          </div>
        </div>
        <div className={style.are2}>
          <div className={style.box1}>
            <div className={style.text}>
              <h3>Marketplace</h3>
              <p>All NFTs</p>
              <p>Art</p>
              <p>Collectibles</p>
              <p>Music</p>
              <p>Photography</p>
              <p>Sports</p>
              <p>Trading Cards</p>
              <p>Utility</p>
              <p>Virtual Worlds</p>
            </div>
          </div>
          <div className={style.box2}>
            <div className={style.text}>
              <h3>My Account</h3>
              <p>Profile</p>
              <p>Favorites</p>
              <p>My Collections</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
        <div className={style.are3}>
          <div className={style.text}>
            <h3>Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <form action="">
              <div className={style.email}>
                <input type="text" placeholder="Enter your email address.." />
              </div>
              <button>Subscibe Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
