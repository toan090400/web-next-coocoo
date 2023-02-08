import Image from "next/image";
import { bid, history } from "./itemArray";
import Twitter from "../Image/Icon-Twitter/Icon_Twitter";
import Github from "../Image/Icon-Github/Icon_Github";
import Telegram from "../Image/Icon-Telegram/Icon_Telegram";
import Slide_Page from "./Slide";
// image
import latest1 from "../../public/item_page/over/latest1.png";
import latest2 from "../../public/item_page/over/latest2.png";
import his1 from "../../public/item_page/over/his1.png";
import his2 from "../../public/item_page/over/his2.png";
const Over = () => {
  return (
    <div className="over">
      <div className="over_chill">
        <div className="box1">
          <div className="latest">
            <div className="latest_chill">
              <div className="header">
                <p>Latest</p>
                <Image className="image_1" src={latest1} alt="latest1" />
              </div>
              <div className="number">
                <p>3 BNB</p>
              </div>
              <div className="price">
                <Image className="image_2" src={latest2} alt="latest2" />
                <p>+10,19% (+1,234.89)</p>
              </div>
            </div>
          </div>
          <div className="bid">
            <div className="bid_chill">
              <div className="header">
                <p>Bids / Offers</p>
              </div>
              <div className="data">
                {bid.map((i) => {
                  return (
                    <div key={i.id} className="item">
                      <div className="time">01/22/22</div>
                      <div className="number">{i.number}</div>
                      <div className="name">Buyer&#8217;s username</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="history">
            <div className="history_chill">
              <div className="header">
                <div className="text">
                  <p>Price History</p>
                </div>
                <div className="year">
                  <p>2021</p>
                  <div className="image">
                    <Image src={his1} alt="his1" />
                  </div>
                </div>
              </div>
              <div className="time">
                <p>1D</p>
                <p className="check">1M</p>
                <p>3M</p>
                <p>1Y</p>
                <p className="all">YTD</p>
              </div>
              <div className="image">
                <Image src={his2} alt="his2" />
              </div>
              <div className="month">
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="are1">
            <div className="history">
              <div className="history_chill">
                <div className="header">
                  <p>History</p>
                </div>
                <div className="data">
                  {history.map((i) => {
                    return (
                      <div key={i.id} className="item">
                        <p className="list">{i.name}</p>
                        <p className="user">Buyer&#8217;s username</p>
                        <p className="time">01/22/22 | 03:37 PM</p>
                      </div>
                    );
                  })}
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
            <div className="more">
              <div className="more_chill">
                <div className="header">
                  <p className="text_1">More From</p>
                  <p className="text_2">this collection</p>
                  <div className="image">
                    <Image src={his1} alt="his1" />
                  </div>
                </div>
                <div className="box">
                  <div className="box_chill">
                    <Slide_Page />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Over;
