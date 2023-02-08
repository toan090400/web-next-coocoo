import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import Card from "../../public/Card/item.png";
import Heart from "../Image/Heart/Heart";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Slide = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        <div className="item">
          <div className="item-image">
            <Image src={Card} alt="card" />
          </div>
          <div className="item-data">
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
          <div className="item-bid">
            <div className="time">
              <p>3h 50m 2s</p>
            </div>
            <div className="btn">
              <button>Bid Now</button>
            </div>
            <div className="image">
              <Heart />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <div className="item-image">
            <Image src={Card} alt="card" />
          </div>
          <div className="item-data">
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
          <div className="item-bid">
            <div className="time">
              <p>3h 50m 2s</p>
            </div>
            <div className="btn">
              <button>Bid Now</button>
            </div>
            <div className="image">
              <Heart />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <div className="item-image">
            <Image src={Card} alt="card" />
          </div>
          <div className="item-data">
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
          <div className="item-bid">
            <div className="time">
              <p>3h 50m 2s</p>
            </div>
            <div className="btn">
              <button>Bid Now</button>
            </div>
            <div className="image">
              <Heart />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
