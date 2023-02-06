import style from "../../styles/Item_Page/Item.module.scss";
import Image from "next/image";
// image
import latest1 from "../../public/item_page/over/latest1.png";
import latest2 from "../../public/item_page/over/latest2.png";
import srow from "../../public/item_page/over/srow.jpg";
import his1 from "../../public/item_page/over/his1.png";
import his2 from "../../public/item_page/over/his2.png";
import follow1 from "../../public/item_page/over/follow1.png";
import follow2 from "../../public/item_page/over/follow2.png";
import follow3 from "../../public/item_page/over/follow3.png";
import lef from "../../public/item_page/over/lef.png";
import rig from "../../public/item_page/over/rig.png";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import more2 from "../../public/item_page/over/more2.png";
import more3 from "../../public/item_page/over/more3.png";
const Over = () => {
  return (
    <div className={style.over}>
      <div className={style.over_chill}>
        <div className={style.box1}>
          <div className={style.latest}>
            <div className={style.latest_chill}>
              <div className={style.header}>
                <p>Latest</p>
                <Image className={style.image_1} src={latest1} alt="latest1" />
              </div>
              <div className={style.number}>
                <p>3 BNB</p>
              </div>
              <div className={style.price}>
                <Image className={style.image_2} src={latest2} alt="latest2" />
                <p>+10,19% (+1,234.89)</p>
              </div>
            </div>
          </div>
          <div className={style.bid}>
            <div className={style.bid_chill}>
              <div className={style.header}>
                <p>Bids / Offers</p>
              </div>
              <div className={style.data}>
                <div className={style.item}>
                  <div className={style.time}>01/22/22</div>
                  <div className={style.number}>3 BNB</div>
                  <div className={style.name}>Buyer&#8217;s username</div>
                  <Image src={srow} alt="srow" />
                </div>
                <div className={style.item}>
                  <div className={style.time}>01/22/22</div>
                  <div className={style.number}>2.1 BNB</div>
                  <div className={style.name}>Buyer&#8217;s username</div>
                </div>
                <div className={style.item}>
                  <div className={style.time}>01/22/22</div>
                  <div className={style.number}>1 BNB</div>
                  <div className={style.name}>Buyer&#8217;s username</div>
                </div>
                <div className={style.item}>
                  <div className={style.time}>01/22/22</div>
                  <div className={style.number}>2 BNB</div>
                  <div className={style.name}>Buyer&#8217;s username</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.history}>
            <div className={style.history_chill}>
              <div className={style.header}>
                <div className={style.text}>
                  <p>Price History</p>
                </div>
                <div className={style.year}>
                  <p>2021</p>
                  <div className={style.image}>
                    <Image src={his1} alt="his1" />
                  </div>
                </div>
              </div>
              <div className={style.time}>
                <p>1D</p>
                <p className={style.check}>1M</p>
                <p>3M</p>
                <p>1Y</p>
                <p className={style.all}>YTD</p>
              </div>
              <div className={style.image}>
                <Image src={his2} alt="his2" />
              </div>
              <div className={style.month}>
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
        <div className={style.box2}>
          <div className={style.are1}>
            <div className={style.history}>
              <div className={style.history_chill}>
                <div className={style.header}>
                  <p>History</p>
                </div>
                <div className={style.data}>
                  <div className={style.item}>
                    <p className={style.list}>Sold for .6 BNB</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                    <Image src={srow} alt="srow" />
                  </div>
                  <div className={style.item}>
                    <p className={style.list}>Listed for .6 BNB</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                  </div>
                  <div className={style.item}>
                    <p className={style.list}>Listed for .6 BNB</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                  </div>
                  <div className={style.item}>
                    <p className={style.list}>Listed for .6 BNB</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                  </div>
                  <div className={style.item}>
                    <p className={style.list}>Listed for .6 BNB</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                  </div>
                  <div className={style.item}>
                    <p className={style.list}>Minted</p>
                    <p className={style.user}>Buyer&#8217;s username</p>
                    <p className={style.time}>01/22/22 | 03:37 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.follow}>
              <div className={style.follow_chill}>
                <div className={style.header}>
                  <p>Follow the Creator</p>
                </div>
                <div className={style.box}>
                  <div className={style.item}>
                    <Image src={follow1} alt="follow1" />
                    <p>@cocomarket</p>
                  </div>
                  <div className={style.item}>
                    <Image src={follow2} alt="follow2" />
                    <p>@cocomarket</p>
                  </div>
                  <div className={style.item}>
                    <Image src={follow3} alt="follow3" />
                    <p>@cocomarket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.are2}>
            <div className={style.more}>
              <div className={style.more_chill}>
                <div className={style.header}>
                  <p className={style.text_1}>More From</p>
                  <p className={style.text_2}>this collection</p>
                  <div className={style.image}>
                    <Image src={his1} alt="his1" />
                  </div>
                </div>
                <div className={style.box}>
                  <div className={style.box_chill}>
                    <div className={`${style.item} ${style.lef}`}>
                      <div className={style.image_l}>
                        <Image src={lef} alt="lef" />
                      </div>
                      <div className={style.image}>
                        <Image src={more2} alt="more2" />
                      </div>
                      <div className={style.image_r}>
                        <Image src={rig} alt="rig" />
                      </div>
                      <div className={style.data}>
                        <div className={style.text}>
                          <p>Name of Collectible</p>
                          <p className={style.bottom}>Name of Collectible</p>
                        </div>
                        <div className={style.number}>
                          <div className={style.image}>
                            <Item />
                          </div>
                          <p>0.25 BNB</p>
                        </div>
                      </div>
                      <div className={style.bid}>
                        <div className={style.time}>
                          <p>3h 50m 2s</p>
                        </div>
                        <div className={style.btn}>
                          <button>Bid Now</button>
                        </div>
                        <div className={style.image}>
                          <Image src={more3} alt="more3" />
                        </div>
                      </div>
                    </div>
                    <div className={style.item}>
                      <div className={style.image}>
                        <Image src={more2} alt="more2" />
                      </div>
                      <div className={style.data}>
                        <div className={style.text}>
                          <p>Name of Collectible</p>
                          <p className={style.bottom}>Name of Collectible</p>
                        </div>
                        <div className={style.number}>
                          <div className={style.image}>
                            <Item />
                          </div>
                          <p>0.25 BNB</p>
                        </div>
                      </div>
                      <div className={style.bid}>
                        <div className={style.time}>
                          <p>3h 50m 2s</p>
                        </div>
                        <div className={style.btn}>
                          <button>Bid Now</button>
                        </div>
                        <div className={style.image}>
                          <Image src={more3} alt="more3" />
                        </div>
                      </div>
                    </div>
                    <div className={`${style.item} ${style.rig}`}>
                      <div className={style.image}>
                        <Image src={more2} alt="more2" />
                      </div>
                      <div className={style.data}>
                        <div className={style.text}>
                          <p>Name of Collectible</p>
                          <p className={style.bottom}>Name of Collectible</p>
                        </div>
                        <div className={style.number}>
                          <div className={style.image}>
                            <Item />
                          </div>
                          <p>0.25 BNB</p>
                        </div>
                      </div>
                      <div className={style.bid}>
                        <div className={style.time}>
                          <p>3h 50m 2s</p>
                        </div>
                        <div className={style.btn}>
                          <button>Bid Now</button>
                        </div>
                        <div className={style.image}>
                          <Image src={more3} alt="more3" />
                        </div>
                      </div>
                      <div className={style.image_r}>
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
