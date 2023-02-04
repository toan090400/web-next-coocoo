import { cardArray } from "./marketplaceArray";
import Image from "next/image";
import more1 from "../../public/merketplace/card/more1.png";
import more2 from "../../public/merketplace/card/more2.png";
import more3 from "../../public/merketplace/card/more3.png";
const Card = () => {
  return (
    <div className="card">
      <div className="card-chill">
        <div className="card-box">
          {cardArray.map((data) => {
            return (
              <div key={data.id} className={data.check ? "item hiden" : "item"}>
                <div className="item-chill">
                  <div className="image">
                    <Image src={more2} alt="more2" />
                  </div>
                  <div className="data">
                    <div className="text">
                      <p>{data.name}</p>
                      <p className="bottom">Name of Collectible</p>
                    </div>
                    <div className="number">
                      <div className="image">
                        <Image src={more1} alt="more1" />
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
