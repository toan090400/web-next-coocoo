import Image from "next/image";
// footer
import logoFooter from "../../public/layout/footer/logo.png";
import dis from "../../public/layout/footer/dis.png";
import inta from "../../public/layout/footer/inta.png";
import tw from "../../public/layout/footer/tw.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__conatiner">
        <div className="footer__are1">
          <div className="footer__logo">
            <Image src={logoFooter} alt="" />
          </div>
          <div className="footer__text">
            <p>
              The largest digital marketplace for crypto collectibles and
              non-fungible tokens (NFTs) on the Binance Smart Cahin. Create,
              collect, sell, and showcase exclusive digital items.
            </p>
          </div>
          <div className="footer__icon">
            <Image className="footer__tw" src={tw} alt="" />
            <Image className="footer__dis" src={dis} alt="" />
            <Image src={inta} alt="" />
          </div>
        </div>
        <div className="footer__are2">
          <div className="footer__box1">
            <div className="footer__text">
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
          <div className="footer__box2">
            <div className="footer__text">
              <h3>My Account</h3>
              <p>Profile</p>
              <p>Favorites</p>
              <p>My Collections</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
        <div className="footer__are3">
          <div className="footer__text">
            <h3>Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <form action="">
              <div className="footer__email">
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
