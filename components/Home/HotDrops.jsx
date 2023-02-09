import Image from "next/image";
import { itemHot } from "./homeArray";
// hotDrops
import logohotDrops from "../../public/home/hotDrops/logo.png";
import Card from "../../public/Card/item.png";
import Card_Change from "../../public/Card/item-change.png";
import Heart from "../Image/Heart/Heart";
import Heart_Change from "../Image/Heart-Change/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Item_Change from "../Image/Icon-Number-Lingth-Change/Icon-Number-Lingth-Change";
const HotDrops = () => {
  return (
    <div className="hotDrops">
      <div className="hotDrops__title">
        <div className="text">
          <h1 className="hot">HOT</h1>
          <div className="drop-box">
            <h1 className="drops">DROPS</h1>
            <Image src={logohotDrops} alt="" />
          </div>
        </div>
      </div>
      <div className="hotDrops__item">
        <div className="hotDrops__card">
          {itemHot.map((item) => {
            return (
              <div key={item.id} className="card_item">
                <div className="box">
                  <Image className="card__box-image" src={Card} alt="" />
                  <Image
                    className="card__box-image change"
                    src={Card_Change}
                    alt=""
                  />
                  <p className="text1">Name of Collectible</p>
                  <p className="text2">Name of Collectible</p>

                  <div className="number">
                    <div className="image">
                      <Item />
                    </div>
                    <div className="image change">
                      <Item_Change />
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
        </div>
      </div>
    </div>
  );
};

export default HotDrops;
