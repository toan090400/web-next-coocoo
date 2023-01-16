import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
import { itemHot } from "./homeArray";
// hotDrops
import itemHotImage from "../../public/home/hotDrops/item.png";
import logohotDrops from "../../public/home/hotDrops/logo.png";
import hotVector from "../../public/home/hotDrops/vector.png";
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
                  <Image src={itemHotImage} alt="" />
                  <p className={style.text1}>{item.name}</p>
                  <p className={style.text2}>{item.discription}</p>
                  <p className={style.bnb}>{item.bnb}</p>
                  <div className={style.button}>
                    <p className={style.time}>{item.time}</p>
                    <button className={style.btn}>Bid Now</button>
                    <Image src={hotVector} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className={`${style.card_item} ${style.res}`}>
            <div className={style.box}>
              <Image src={itemHotImage} alt="" />
              <p className={style.text1}>Name of Collectible</p>
              <p className={style.text2}>Name of Collectible</p>
              <p className={style.bnb}>0.25 BNB</p>
              <div className={style.button}>
                <p className={style.time}>3h 50m 2s</p>
                <button className={style.btn}>Bid Now</button>
                <Image src={hotVector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDrops;
