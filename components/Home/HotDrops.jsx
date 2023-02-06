import Image from "next/image";
import { itemHot } from "./homeArray";
// hotDrops
import logohotDrops from "../../public/home/hotDrops/logo.png";
import Card from "../../public/Card/item.png";
import Heart from "../Image/Heart/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
const HotDrops = () => {
  return (
    <div className="hotDrops">
      <div className="title">
        <div className="text">
          <h1 className="hot">HOT</h1>
          <h1 className="drops">DROPS</h1>
          <Image src={logohotDrops} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="card">
          {itemHot.map((item) => {
            return (
              <div key={item.id} className="card_item">
                <div className="box">
                  <Image src={Card} alt="" />
                  <p className="text1">Name of Collectible</p>
                  <p className="text2">Name of Collectible</p>

                  <div className="number">
                    <div className="image">
                      <Item />
                    </div>
                    <div className="text">
                      <p className="bnb">0.25 BNB</p>
                    </div>
                  </div>
                  <div className="button">
                    <p className="time">3h 50m 2s</p>
                    <button className="btn">Bid Now</button>
                    <Heart />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="card_item res show">
            <div className="box">
              <Image src={Card} alt="card" />
              <p className="text1">Name of Collectible</p>
              <p className="text2">Name of Collectible</p>
              <p className="bnb">0.25 BNB</p>
              <div className="button">
                <p className="time">3h 50m 2s</p>
                <button className="btn">Bid Now</button>
                <Heart />
              </div>
            </div>
          </div>
          <div className="card_item res">
            <div className="box">
              <Image src={Card} alt="card" />
              <p className="text1">Name of Collectible</p>
              <p className="text2">Name of Collectible</p>
              <p className="bnb">0.25 BNB</p>
              <div className="button">
                <p className="time">3h 50m 2s</p>
                <button className="btn">Bid Now</button>
                <Heart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDrops;
