import Image from "next/image";
import Twitter from "../Image/Icon-Twitter/Icon_Twitter";
import Github from "../Image/Icon-Github/Icon_Github";
import Telegram from "../Image/Icon-Telegram/Icon_Telegram";
// image
import latest1 from "../../public/item_page/over/latest1.png";
import latest2 from "../../public/item_page/over/latest2.png";
import srow from "../../public/item_page/over/srow.jpg";
import his1 from "../../public/item_page/over/his1.png";
import his2 from "../../public/item_page/over/his2.png";
import lef from "../../public/item_page/over/lef.png";
import rig from "../../public/item_page/over/rig.png";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Card from "../../public/Card/item.png";
import Heart from "../Image/Heart/Heart";
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
                <div className="item">
                  <div className="time">01/22/22</div>
                  <div className="number">3 BNB</div>
                  <div className="name">Buyer&#8217;s username</div>
                  <Image src={srow} alt="srow" />
                </div>
                <div className="item">
                  <div className="time">01/22/22</div>
                  <div className="number">2.1 BNB</div>
                  <div className="name">Buyer&#8217;s username</div>
                </div>
                <div className="item">
                  <div className="time">01/22/22</div>
                  <div className="number">1 BNB</div>
                  <div className="name">Buyer&#8217;s username</div>
                </div>
                <div className="item">
                  <div className="time">01/22/22</div>
                  <div className="number">2 BNB</div>
                  <div className="name">Buyer&#8217;s username</div>
                </div>
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
                    <div className="item lef">
                      <div className="image_l">
                        <Image src={lef} alt="lef" />
                      </div>
                      <div className="image">
                        <Image src={Card} alt="card" />
                      </div>
                      <div className="image_r">
                        <Image src={rig} alt="rig" />
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
                          <p>0.25 BNB</p>
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
                    <div className="item">
                      <div className="image">
                        <Image src={Card} alt="card" />
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
                          <p>0.25 BNB</p>
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
                    <div className="item rig">
                      <div className="image">
                        <Image src={Card} alt="card" />
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
                          <p>0.25 BNB</p>
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
                      <div className="image_r">
                        <Image src={rig} alt="rig" />
                      </div>
                    </div>
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
