import Twitter from "../Image/Icon-Twitter/Icon_Twitter";
import Github from "../Image/Icon-Github/Icon_Github";
import Telegram from "../Image/Icon-Telegram/Icon_Telegram";
import Heart from "../Image/Heart/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Image from "next/image";
import Crad_Image from "../../public/Card/item.png";
import srow from "../../public/item_page/over/srow.jpg";
import { account } from "./accountAray";
const Data_Chill = () => {
  return (
    <div className="data__are2">
      <div className="data__are2-chill">
        <div className="are1">
          <div className="history">
            <div className="history_chill">
              <div className="header">
                <p>History</p>
              </div>
              <div className="data">
                <div className="item">
                  <p className="list">Sold for .6 BNB</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                  <Image src={srow} alt="srow" />
                </div>
                <div className="item">
                  <p className="list">Listed for .6 BNB</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                </div>
                <div className="item">
                  <p className="list">Listed for .6 BNB</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                </div>
                <div className="item">
                  <p className="list">Listed for .6 BNB</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                </div>
                <div className="item">
                  <p className="list">Listed for .6 BNB</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                </div>
                <div className="item">
                  <p className="list">Minted</p>
                  <p className="user">Buyer&#8217;s username</p>
                  <p className="time">01/22/22 | 03:37 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="follow">
            <div className="follow_chill">
              <div className="header">
                <p>Follow the Creator</p>
              </div>
              <div className="box">
                <div className="item">
                  <Twitter />
                  <p>@cocomarket</p>
                </div>
                <div className="item">
                  <Telegram />
                  <p>@cocomarket</p>
                </div>
                <div className="item">
                  <Github />
                  <p>@cocomarket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="are2">
          <div className="header">
            <div className="header-chill">
              <div className="collected">
                <span>Collected</span>
              </div>
              <div className="created">
                <span>Created</span>
              </div>
              <div className="favorited block">
                <span>Favorited</span>
              </div>
              <div className="hidden block">
                <span>Hidden</span>
              </div>
              <div className="offers block">
                <span>Offers</span>
              </div>
              <div className="listings block">
                <span>Listings</span>
              </div>
            </div>
          </div>
          <div className="card">
            {account.map((data) => {
              return (
                <div
                  key={data.id}
                  className={data.check ? "item open" : "item"}
                >
                  <div className="item-image">
                    <Image src={Crad_Image} alt="card" />
                  </div>
                  <div className="data">
                    <div className="text">
                      <p>Name of Collectible</p>
                      <p className="bottom">Name of Collectible</p>
                    </div>
                    <div className="number">
                      <div className="image">
                        <Item />
                      </div>
                      <div className="text">
                        <p>0.25 BNB</p>
                      </div>
                    </div>
                  </div>
                  <div className="bid">
                    <div className="time">
                      <p>3h 50m 2s</p>
                    </div>
                    <div className="btn">
                      <button>Bid Now</button>
                    </div>
                    <div className="image">
                      <Heart />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data_Chill;
