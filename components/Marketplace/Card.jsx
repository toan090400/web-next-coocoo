import { cardArray } from "./marketplaceArray";
import Image from "next/image";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Item_Change from "../Image/Icon-Number-Lingth-Change/Icon-Number-Lingth-Change";
import Heart from "../Image/Heart/Heart";
import Heart_Change from "../Image/Heart-Change/Heart";
import Card_Item from "../../public/Card/item.png";
import Card_Item_Change from "../../public/Card/item-change.png";
const Card = () => {
  return (
    <div className="card">
      <div className="card-chill">
        <div className="card-box">
          {cardArray.map((data) => {
            return (
              <div key={data.id} className="item">
                <div className="item-chill">
                  <div className="image">
                    <Image src={Card_Item} alt="card" />
                  </div>
                  <div className="image change">
                    <Image src={Card_Item_Change} alt="card change" />
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
                      <div className="image change">
                        <Item_Change />
                      </div>
                      <p>0.25 BNB</p>
                    </div>
                  </div>
                  <div className="bid">
                    {data.check ? (
                      <div className="bid-chill change">
                        <div className="time">
                          <p>3h 50m 2s</p>
                        </div>
                        <div className="btn">
                          <button>Bid Now</button>
                        </div>
                      </div>
                    ) : (
                      <div className="bid-chill">
                        <div className="time">
                          <p>3h 50m 2s</p>
                        </div>
                        <div className="btn">
                          <button>Bid Now</button>
                        </div>
                      </div>
                    )}
                    <div className="image">
                      <Heart />
                    </div>
                    <div className="image change">
                      <Heart_Change />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="button">
          <div className="box">
            <div className="text">
              <p>More NFT&#8217;s</p>
            </div>
            <div className="button change">
              <div className="chill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="15"
                  viewBox="0 0 27 15"
                  fill="none"
                >
                  <path
                    d="M25.9498 13.725L13.4998 1.27496L1.0498 13.725"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-button">
        <div className="chill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="15"
            viewBox="0 0 27 15"
            fill="none"
          >
            <path
              d="M25.9498 13.725L13.4998 1.27496L1.0498 13.725"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
