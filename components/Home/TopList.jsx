import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
import { topList } from "./homeArray";
// topList
import vectorTopList from "../../public/home/topList/vector.png";
import checkImage from "../../public/home/topList/check.png";
const TopList = () => {
  return (
    <div className={style.topList}>
      <div className={style.box}>
        <div className={`${style.are} ${style.collections}`}>
          <p className={style.top}>Top Collections</p>
          <p className={style.time}>
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className={style.userBox}>
                <p className={style.number}>{item.id}</p>
                {item.check ? (
                  <>
                    <div className={style.image}>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className={style.adress}>
                  <p className={style.text}>{item.name}</p>
                  <p className={style.textNumber}>{item.number}</p>
                </div>
                <p
                  className={
                    item.status ? style.price : `${style.price} ${style.err}`
                  }
                >
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
        <div className={`${style.are} ${style.sellers}`}>
          <p className={style.top}>Top Sellers</p>
          <p className={style.time}>
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className={style.userBox}>
                <p className={style.number}>{item.id}</p>
                {item.check ? (
                  <>
                    <div className={style.image}>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className={style.adress}>
                  <p className={style.text}>{item.name}</p>
                  <p className={style.textNumber}>{item.number}</p>
                </div>
                <p
                  className={
                    item.status ? style.price : `${style.price} ${style.err}`
                  }
                >
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
        <div className={`${style.are} ${style.buyers}`}>
          <p className={style.top}>Top Buyers</p>
          <p className={style.time}>
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className={style.userBox}>
                <p className={style.number}>{item.id}</p>
                {item.check ? (
                  <>
                    <div className={style.image}>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className={style.adress}>
                  <p className={style.text}>{item.name}</p>
                  <p className={style.textNumber}>{item.number}</p>
                </div>
                <p
                  className={
                    item.status ? style.price : `${style.price} ${style.err}`
                  }
                >
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.dots}>
        <p className={style.check}></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default TopList;
