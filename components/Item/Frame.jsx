import Image from "next/image";
// image
import frame from "../../public/item_page/frame/fra.png";
import user_frame from "../../public/item_page/frame/user-frame.png";
const Frame = () => {
  return (
    <div className="frame">
      <div className="container">
        <div className="content">
          <div className="image">
            <Image className="frame" src={frame} alt="frame" />
          </div>
          <div className="user__item">
            <div className="are1">
              <div className="user__item">
                <p>Creator</p>
                <div className="user_info fir">
                  <Image src={user_frame} alt="user-frame" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className="user__item sec">
                <p>Owner</p>
                <div className="user_info sec">
                  <Image src={user_frame} alt="user-frame" />
                  <p>Arkhan17</p>
                </div>
              </div>
              <div className="user__item">
                <p>Collection</p>
                <div className="user_info thr">
                  <Image src={user_frame} alt="user-frame" />
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
            <div className="are5">
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
