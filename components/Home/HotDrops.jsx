import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
import { itemHot } from "./homeArray";
// hotDrops
import logohotDrops from "../../public/home/hotDrops/logo.png";
import Card from "../../public/Card/item.png";
import Heart from "../Image/Heart/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
const HotDrops = () => {
  return (
    <div className={style.hotDrops}>
      <div className={style.title}>
        <div className={style.text}>
          <h1 className={style.hot}>HOT</h1>
          <h1 className={style.drops}>DROPS</h1>
          <Image src={logohotDrops} alt="" />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.card}>
          {itemHot.map((item) => {
            return (
              <div key={item.id} className={style.card_item}>
                <div className={style.box}>
                  <Image src={Card} alt="" />
                  <p className={style.text1}>Name of Collectible</p>
                  <p className={style.text2}>Name of Collectible</p>

                  <div className={style.number}>
                    <div className={style.image}>
                      <Item />
                    </div>
                    <div className={style.text}>
                      <p className={style.bnb}>0.25 BNB</p>
                    </div>
                  </div>
                  <div className={style.button}>
                    <p className={style.time}>3h 50m 2s</p>
                    <button className={style.btn}>Bid Now</button>
                    <Heart />
                  </div>
                </div>
              </div>
            );
          })}
          <div className={`${style.card_item} ${style.res} ${style.show}`}>
            <div className={style.box}>
              <Image src={Card} alt="" />
              <p className={style.text1}>Name of Collectible</p>
              <p className={style.text2}>Name of Collectible</p>
              <p className={style.bnb}>0.25 BNB</p>
              <div className={style.button}>
                <p className={style.time}>3h 50m 2s</p>
                <button className={style.btn}>Bid Now</button>
                <Heart />
              </div>
            </div>
          </div>
          <div className={`${style.card_item} ${style.res}`}>
            <div className={style.box}>
              <Image src={Card} alt="" />
              <p className={style.text1}>Name of Collectible</p>
              <p className={style.text2}>Name of Collectible</p>
              <p className={style.bnb}>0.25 BNB</p>
              <div className={style.button}>
                <p className={style.time}>3h 50m 2s</p>
                <button className={style.btn}>Bid Now</button>
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
