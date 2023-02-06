import Image from "next/image";
import { topList } from "./homeArray";
// topList
import vectorTopList from "../../public/home/topList/vector.png";
import checkImage from "../../public/home/topList/check.png";
const TopList = () => {
  return (
    <div className="topList">
      <div className="box">
        <div className="are collections">
          <p className="top">Top Collections</p>
          <p className="time">
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className="userBox">
                <p className="number">{item.id}</p>
                {item.check ? (
                  <>
                    <div className="image">
                      <Image className="start" src={item.image} alt="" />
                      <Image className="check" src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className="adress">
                  <p className="text">{item.name}</p>
                  <p className="textNumber">{item.number}</p>
                </div>
                <p className={item.status ? "price" : "price err"}>
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
        <div className="are sellers">
          <p className="top">Top Sellers</p>
          <p className="time">
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className="userBox">
                <p className="number">{item.id}</p>
                {item.check ? (
                  <>
                    <div className="image">
                      <Image className="start" src={item.image} alt="" />
                      <Image className="check" src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className="adress">
                  <p className="text">{item.name}</p>
                  <p className="textNumber">{item.number}</p>
                </div>
                <p className={item.status ? "price" : "price err"}>
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
        <div className="are buyers">
          <p className="top">Top Buyers</p>
          <p className="time">
            Last 7 days <Image src={vectorTopList} alt="" />
          </p>
          {topList.map((item) => {
            return (
              <div key={item.id} className="userBox">
                <p className="number">{item.id}</p>
                {item.check ? (
                  <>
                    <div className="image">
                      <Image className="start" src={item.image} alt="" />
                      <Image className="check" src={checkImage} alt="" />
                    </div>
                  </>
                ) : (
                  <Image src={item.image} alt="" />
                )}
                <div className="adress">
                  <p className="text">{item.name}</p>
                  <p className="textNumber">{item.number}</p>
                </div>
                <p className={item.status ? "price" : "price err"}>
                  {item.bnb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dots">
        <p className="check"></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default TopList;
