import Image from "next/image";
import { Categorys, discoverMore } from "./homeArray";
// discoverMore
import Heart from "../Image/Heart/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import logoDiscoverMore from "../../public/home/discoverMore/logo.png";
import vectorDiscoverMore from "../../public/home/discoverMore/vector.png";
import Card from "../../public/Card/item.png";
const DsicoverMore = () => {
  return (
    <div className="discoverMore">
      <div className="conatainerMore">
        <div className="are1">
          <div className="text">
            <p>
              DISCOVER <span>MORE</span>
            </p>
            <Image src={logoDiscoverMore} alt="" />
          </div>
        </div>
        <div className="are2">
          <div className="box">
            <div className="category">
              {Categorys.map((item) => {
                return (
                  <div key={item.id} className="category-text">
                    <p className={item.check ? "all" : ""}>{item.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="filer">
              <p className="filters">
                <Image src={vectorDiscoverMore} alt="" />
                Filters
              </p>
            </div>
          </div>
        </div>
        <div className="are3">
          <div className="box_card">
            {discoverMore.map((item) => {
              return (
                <div key={item.id} className="card">
                  <div className="box">
                    <Image className="more" src={Card} alt="" />
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
            <div className="card res">
              <div className="box">
                <Image className="more" src={Card} alt="" />
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
            <div className="card res show">
              <div className="box">
                <Image className="more" src={Card} alt="" />
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
            <div className="card res">
              <div className="box">
                <Image className="more" src={Card} alt="" />
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
        <div className="are4">
          <button className="btn">More NFT&#8217;s</button>
        </div>
      </div>
    </div>
  );
};

export default DsicoverMore;
