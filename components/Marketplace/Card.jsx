import { cardArray } from "./marketplaceArray";
import Image from "next/image";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import more3 from "../../public/merketplace/card/more3.png";
import Card_Item from "../../public/Card/item.png";
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
                      <Image src={more3} alt="more3" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
