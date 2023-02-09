import Image from "next/image";
import { topList } from "./homeArray";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// topList
import vectorTopList from "../../public/home/topList/vector.png";
import checkImage from "../../public/home/topList/check.png";

const TopList = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false, // không loop lại
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="topList">
      <div className="box">
        <Slider {...settings}>
          <div className="are ">
            <p className="top">Top Collections</p>
            <div className="time">
              <div className="time-text">
                <span>Last 7 days </span>
              </div>
              <div className="time-image">
                <Image src={vectorTopList} alt="" />
              </div>
            </div>
            {topList.map((item) => {
              return (
                <div key={item.id} className="userBox">
                  <p className="number">{item.id}</p>
                  {item.check ? (
                    <>
                      <div className="image">
                        <div className="image-chill">
                          <Image className="start" src={item.image} alt="" />
                          <Image className="check" src={checkImage} alt="" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="image">
                        <Image src={item.image} alt="" />
                      </div>
                    </>
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
          <div className="are ">
            <p className="top">Top Sellers</p>
            <div className="time">
              <div className="time-text">
                <span>Last 7 days </span>
              </div>
              <div className="time-image">
                <Image src={vectorTopList} alt="" />
              </div>
            </div>
            {topList.map((item) => {
              return (
                <div key={item.id} className="userBox">
                  <p className="number">{item.id}</p>
                  {item.check ? (
                    <>
                      <div className="image">
                        <div className="image-chill">
                          <Image className="start" src={item.image} alt="" />
                          <Image className="check" src={checkImage} alt="" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="image">
                        <Image src={item.image} alt="" />
                      </div>
                    </>
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
          <div className="are ">
            <p className="top">Top Buyers</p>
            <div className="time">
              <div className="time-text">
                <span>Last 7 days </span>
              </div>
              <div className="time-image">
                <Image src={vectorTopList} alt="" />
              </div>
            </div>
            {topList.map((item) => {
              return (
                <div key={item.id} className="userBox">
                  <p className="number">{item.id}</p>
                  {item.check ? (
                    <>
                      <div className="image">
                        <div className="image-chill">
                          <Image className="start" src={item.image} alt="" />
                          <Image className="check" src={checkImage} alt="" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="image">
                        <Image src={item.image} alt="" />
                      </div>
                    </>
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
        </Slider>
      </div>
    </div>
  );
};

export default TopList;
