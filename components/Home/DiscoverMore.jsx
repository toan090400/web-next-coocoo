import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
import { Categorys, discoverMore } from "./homeArray";
// discoverMore
import logoDiscoverMore from "../../public/home/discoverMore/logo.png";
import vectorDiscoverMore from "../../public/home/discoverMore/vector.png";
import heardDiscoverMore from "../../public/home/discoverMore/heard.png";
import itemDiscoverMore from "../../public/home/discoverMore/item.png";
const DsicoverMore = () => {
  return (
    <div className={style.discoverMore}>
      <div className={style.conatainerMore}>
        <div className={style.are1}>
          <div className={style.text}>
            <p>
              DISCOVER <span>MORE</span>
            </p>
            <Image src={logoDiscoverMore} alt="" />
          </div>
        </div>
        <div className={style.are2}>
          <div className={style.box}>
            <div className={style.category}>
              {Categorys.map((item) => {
                return (
                  <p key={item.id} className={item.check ? style.all : ""}>
                    {item.name}
                  </p>
                );
              })}
            </div>
            <div className={style.filer}>
              <p className={style.filters}>
                <Image src={vectorDiscoverMore} alt="" />
                Filters
              </p>
            </div>
          </div>
        </div>
        <div className={style.are3}>
          <div className={style.box_card}>
            {discoverMore.map((item) => {
              return (
                <div key={item.id} className={style.card}>
                  <div className={style.box}>
                    <Image src={itemDiscoverMore} alt="" />
                    <p className={style.text1}>{item.name}</p>
                    <p className={style.text2}>{item.discription}</p>
                    <p className={style.bnb}>{item.bnb}</p>
                    <div className={style.button}>
                      <p className={style.time}>{item.time}</p>
                      <button className={style.btn}>Bid Now</button>
                      <Image src={heardDiscoverMore} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={`${style.card} ${style.res}`}>
              <div className={style.box}>
                <Image src={itemDiscoverMore} alt="" />
                <p className={style.text1}>Name of Collectible</p>
                <p className={style.text2}>Name of Collectible</p>
                <p className={style.bnb}>0.25 BNB</p>
                <div className={style.button}>
                  <p className={style.time}>3h 50m 2s</p>
                  <button className={style.btn}>Bid Now</button>
                  <Image src={heardDiscoverMore} alt="" />
                </div>
              </div>
            </div>
            <div className={`${style.card} ${style.res} ${style.show}`}>
              <div className={style.box}>
                <Image src={itemDiscoverMore} alt="" />
                <p className={style.text1}>Name of Collectible</p>
                <p className={style.text2}>Name of Collectible</p>
                <p className={style.bnb}>0.25 BNB</p>
                <div className={style.button}>
                  <p className={style.time}>3h 50m 2s</p>
                  <button className={style.btn}>Bid Now</button>
                  <Image src={heardDiscoverMore} alt="" />
                </div>
              </div>
            </div>
            <div className={`${style.card} ${style.res}`}>
              <div className={style.box}>
                <Image src={itemDiscoverMore} alt="" />
                <p className={style.text1}>Name of Collectible</p>
                <p className={style.text2}>Name of Collectible</p>
                <p className={style.bnb}>0.25 BNB</p>
                <div className={style.button}>
                  <p className={style.time}>3h 50m 2s</p>
                  <button className={style.btn}>Bid Now</button>
                  <Image src={heardDiscoverMore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.are4}>
          <button className={style.btn}>More NFT&#8217;s</button>
        </div>
      </div>
    </div>
  );
};

export default DsicoverMore;
