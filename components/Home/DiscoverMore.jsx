import Image from "next/image";
import { Categorys, discoverMore } from "./homeArray";
// discoverMore
import Item_Change from "../Image/Icon-Number-Lingth-Change/Icon-Number-Lingth-Change";
import Heart from "../Image/Heart/Heart";
import Heart_Change from "../Image/Heart-Change/Heart";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
import logoDiscoverMore from "../../public/home/discoverMore/logo.png";
import vectorDiscoverMore from "../../public/home/discoverMore/vector.png";
import Card from "../../public/Card/item.png";
import Card_Change from "../../public/Card/item-change.png";

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
              <div className="button_dis_1">
                <div className="chill">
                  <div className="image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="37"
                      viewBox="0 0 38 37"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_345_13882)">
                        <path
                          d="M21.4998 4.66661C14.4122 4.66661 8.66649 10.4123 8.66649 17.4999C8.66649 24.5876 14.4122 30.3333 21.4998 30.3333C28.5875 30.3333 34.3331 24.5876 34.3331 17.4999C34.3331 10.4123 28.5875 4.66661 21.4998 4.66661Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_345_13882"
                          x="0.416512"
                          y="0.0832974"
                          width="36.6666"
                          height="36.6666"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-2.75" dy="0.916666" />
                          <feGaussianBlur stdDeviation="2.75" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_345_13882"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_345_13882"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="text">
                    <span>AUCTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="are3">
          <div className="box_card">
            <div className="button_dis_2">
              <div className="chill">
                <div className="text">
                  <span>FIXED PRICE</span>
                </div>
                <div className="image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="37"
                    viewBox="0 0 38 37"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_345_13882)">
                      <path
                        d="M21.4998 4.66661C14.4122 4.66661 8.66649 10.4123 8.66649 17.4999C8.66649 24.5876 14.4122 30.3333 21.4998 30.3333C28.5875 30.3333 34.3331 24.5876 34.3331 17.4999C34.3331 10.4123 28.5875 4.66661 21.4998 4.66661Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_345_13882"
                        x="0.416512"
                        y="0.0832974"
                        width="36.6666"
                        height="36.6666"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="-2.75" dy="0.916666" />
                        <feGaussianBlur stdDeviation="2.75" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_345_13882"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_345_13882"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {discoverMore.map((item) => {
              return (
                <div key={item.id} className="card_discover">
                  <div className="box">
                    <Image className="more" src={Card} alt="" />
                    <Image className="more change" src={Card_Change} alt="" />
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
                      {item.check ? (
                        <div className="disButton disBuyButton">
                          <p className="time">Buy Now</p>
                          <button className="btn">Make Offer</button>
                        </div>
                      ) : (
                        <div className="disButton">
                          <p className="time">3h 50m 2s</p>
                          <button className="btn">Bid Now</button>
                        </div>
                      )}

                      <div className="image">
                        <div className="image-chill">
                          <Heart />
                        </div>
                        <div className="image-chill-change">
                          <Heart_Change />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
