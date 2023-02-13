import Twitter from "../Image/Icon-Twitter/Icon_Twitter";
import Github from "../Image/Icon-Github/Icon_Github";
import Telegram from "../Image/Icon-Telegram/Icon_Telegram";
import Heart from "../Image/Heart/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Image from "next/image";
import Link from "next/link";
import Crad_Image from "../../public/Card/item.png";
import { history } from "../Item/itemArray";
import { account } from "./accountAray";
// change
import Crad_Image_Change from "../../public/Card/item-change.png";
import Item_Change from "../Image/Icon-Number-Lingth-Change/Icon-Number-Lingth-Change";
import Heart_Change from "../Image/Heart-Change/Heart";
const Data_Chill = () => {
  return (
    <div className="data__are2">
      <div className="data__are2-chill">
        <div className="are1">
          <div className="history">
            <div className="history_chill">
              <div className="header">
                <p>History</p>
                <p>Your History</p>
              </div>
              <div className="data">
                {history.map((i) => {
                  return (
                    <div key={i.id} className="item">
                      <p className="nft">NFT</p>
                      <p className="list">{i.name}</p>
                      <p className="user">Buyer&#8217;s username</p>
                      <div className="icon">
                        <p className="time">01/22/22 | 03:37 PM</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.51408 0C1.81984 0 1.25704 0.562797 1.25704 1.25704C1.25704 1.95129 1.81984 2.51408 2.51408 2.51408H7.10677L0.368179 9.16757C-0.122726 9.65848 -0.122726 10.4544 0.368179 10.9453C0.859085 11.4362 1.655 11.4362 2.14591 10.9453L8.7993 4.37593V8.7993C8.7993 9.49354 9.36209 10.0563 10.0563 10.0563C10.7506 10.0563 11.3134 9.49354 11.3134 8.7993V1.25704C11.3134 0.562797 10.7506 0 10.0563 0H2.51408Z"
                            fill="#E0E0E0"
                          />
                        </svg>
                      </div>
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
                <p>Social Links</p>
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
                <Link href={`/`}>Collected</Link>
              </div>
              <div className="created">
                <Link href={`/`}>Created</Link>
              </div>
              <div className="favorited block">
                <Link href={`/`}>Favorited</Link>
              </div>
              <div className="hidden block">
                <Link href={`/`}>Hidden</Link>
              </div>
              <div className="offers block">
                <Link href={`/`}>Offers</Link>
              </div>
              <div className="listings block">
                <Link href={`/`}>Listings</Link>
              </div>
            </div>
          </div>
          <div className="card__box">
            <div className="card">
              <div className="card__chill">
                {account.map((data) => {
                  return (
                    <div key={data.id} className="item">
                      <div className="item-image">
                        <Image src={Crad_Image} alt="card" />
                        <Image src={Crad_Image_Change} alt=" change" />
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
                          <div className="image-change">
                            <Item_Change />
                          </div>
                          <div className="text">
                            <p>0.25 BNB</p>
                          </div>
                        </div>
                      </div>
                      <div className="account-bid">
                        {data.check ? (
                          <div className="bid-chill-account change">
                            <div className="time-account">
                              <p>Buy Now</p>
                            </div>
                            <div className="btn-account">
                              <button>Make Offer</button>
                            </div>
                          </div>
                        ) : (
                          <div className="bid-chill-account">
                            <div className="time-account">
                              <p>3h 50m 2s</p>
                            </div>
                            <div className="btn-account">
                              <button>Bid Now</button>
                            </div>
                          </div>
                        )}
                        <div className="image">
                          <Heart />
                        </div>
                        <div className="image-change">
                          <Heart_Change />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data_Chill;
