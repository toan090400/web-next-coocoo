import style from "../../styles/Item_Page/Item.module.scss";
import Image from "next/image";
// image
import frame from "../../public/item_page/frame/fra.png";
import user_frame from "../../public/item_page/frame/user-frame.png";
const Frame = () => {
  return (
    <div className={style.frame}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.image}>
            <Image className={style.frame} src={frame} alt="frame" />
          </div>
          <div className={style.user}>
            <div className={style.are1}>
              <div className={style.user}>
                <p>Creator</p>
                <div className={`${style.user_info} ${style.fir}`}>
                  <img src="./image/frame/user-frame.png" alt="" />
                  <Image src={user_frame} alt="user-frame" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className={`${style.user} ${style.sec}`}>
                <p>Owner</p>
                <div className={`${style.user_info} ${style.sec}`}>
                  <img src="./image/frame/user-frame.png" alt="" />
                  <Image src={user_frame} alt="user-frame" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className={style.user}>
                <p>Collection</p>
                <div className={`${style.user_info} ${style.thr}`}>
                  <img src="./image/frame/user-frame.png" alt="" />
                  <Image src={user_frame} alt="user-frame" />
                  <p>Arkhan17</p>
                </div>
              </div>
            </div>
            <div className={style.are2}>
              <h1>Abstr Gradient NFT</h1>
            </div>
            <div className={style.are3}>
              <div className={style.bill}>
                <p className={style.bid}>Current Bid</p>
                <p className={style.bnb}>0.25 BNB</p>
                <p className={style.price}>$182.00</p>
              </div>
              <div className={style.time}>
                <div className={style.text}>
                  <p>Auction ending in</p>
                  <p className={style.textTime}>
                    12<span>H</span> 43<span>M</span> 42<span>S</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={style.are4}>
              <button>Bid Now</button>
            </div>
            <div className={style.are5}>
              <p>
                Last Sale Price Monfters, a group of monsters with a unique
                philosophy in the world of NFT. Their purpose is to find the
                real shining treasures in the world of NFT and bring them to
                more people.Monfters Club NFTs are the genesis NFTs of
                MonfterVerse. Limited edition of 8,000 editions, each with a
                different combination of cosmetic elements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
