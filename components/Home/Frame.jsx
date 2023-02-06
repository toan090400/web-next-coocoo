import Image from "next/image";
// frame
import dots from "../../public/home/frame/dots.png";
import frame from "../../public/home/frame/frame.png";
import plus from "../../public/home/frame/plus.png";
import user_frame from "../../public/home/frame/user-frame.png";
const Frame = () => {
  return (
    <div className="frame">
      <div className="container">
        <div className="text">
          <h1>
            CREATE
            <Image src={plus} alt="" />
            COLLECT
          </h1>
          <p>A BINANCE SMART CHAIN NFT MARKETPLACE</p>
        </div>
        <div className="content">
          <div className="image">
            <Image className="frame" src={frame} alt="frame" />
            <div>
              <Image className="dots" src={dots} alt="dots" />
            </div>
          </div>
          <div className="user">
            <div className="are1">
              <div className="user">
                <p>Creator</p>
                <div className="user_info fir">
                  <Image src={user_frame} alt="" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className="user">
                <p>Owner</p>
                <div className="user_info sec">
                  <Image src={user_frame} alt="" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className="user">
                <p>Collection</p>
                <div className="user_info thr">
                  <Image src={user_frame} alt="" />
                  <p>Arkhan17</p>
                </div>
              </div>
            </div>
            <div className="are2">
              <h1>Abstr Gradient NFT</h1>
            </div>
            <div className="are3">
              <div className="bill">
                <p className="bid">Current Bid</p>
                <p className="bnb">0.25 BNB</p>
                <p className="price">$182.00</p>
              </div>
              <div className="time">
                <div className="text">
                  <p>Auction ending in</p>
                  <p className="textTime">
                    12<span>H</span> 43<span>M</span> 42<span>S</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="are4">
              <button>Bid Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
