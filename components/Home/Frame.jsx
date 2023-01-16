import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
// frame
import frame from "../../public/home/frame/frame.png";
import plus from "../../public/home/frame/plus.png";
import user_frame from "../../public/home/frame/user-frame.png";
const Frame = () => {
  return (
    <div className={style.frame}>
      <div className={style.container}>
        <div className={style.text}>
          <h1>
            CREATE
            <Image src={plus} alt="" />
            COLLECT
          </h1>
          <p>A BINANCE SMART CHAIN NFT MARKETPLACE</p>
        </div>
        <div className={style.content}>
          <Image src={frame} alt="" />
          <div className={style.user}>
            <div className={style.are1}>
              <div className={style.user}>
                <p>Creator</p>
                <div className={`${style.user_info} ${style.fir}`}>
                  <Image src={user_frame} alt="" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className={style.user}>
                <p>Owner</p>
                <div className={`${style.user_info} ${style.sec}`}>
                  <Image src={user_frame} alt="" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className={style.user}>
                <p>Collection</p>
                <div className={`${style.user_info} ${style.thr}`}>
                  <Image src={user_frame} alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
