import Image from "next/image";
import Icon_Dark from "../Image/Icon-Number-Dark/Icon-Number-Dark";
// image
import search from "../../public/merketplace/filter/search.png";
import dow from "../../public/merketplace/filter/dow.png";
import button1 from "../../public/merketplace/filter/button1.png";
import button2 from "../../public/merketplace/filter/button2.png";
import check from "../../public/merketplace/filter/check.png";
import filter from "../../public/merketplace/filter/filter.png";
const Filter = () => {
  return (
    <div className="filter">
      <div className="search">
        <form action="">
          <div className="image">
            <Image src={search} alt="search" />
          </div>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="filter-chill">
        <div className="are1">
          <div className="box">
            <div className="box1">
              <div className="item">
                <div className="text">
                  <p>Category</p>
                </div>
                <div className="btn">
                  <p>Select One</p>
                  <div className="image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <p>Collection</p>
                </div>
                <div className="btn">
                  <p>Select One</p>
                  <div className="image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="item">
                <div className="text">
                  <p>Collection</p>
                </div>
                <div className="btn">
                  <p>Select One</p>
                  <div className="image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="length">
            <div className="header">
              <div className="text">
                <p>Price Range</p>
              </div>
            </div>
            <div className="select">
              <div className="length-item">
                <div className="length-btn">
                  <p>Min</p>
                  <div className="length-image">
                    <Icon_Dark />
                  </div>
                </div>
              </div>
              <div className="length-item">
                <div className="length-btn">
                  <p>Max</p>
                  <div className="length-image">
                    <Icon_Dark />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="are2">
          <div className="box1">
            <p>Show NSFW</p>
            <div className="image">
              <Image src={button1} alt="button1" />
            </div>
          </div>
          <div className="box2">
            <div className="text">
              <p>Verified only</p>
            </div>

            <div className="image-check">
              <Image src={check} alt="check" />
            </div>
            <div className="image">
              <Image src={button2} alt="button2" />
            </div>
          </div>
        </div>
        <div className="are3">
          <div className="are3-chill">
            <div className="btn">
              <div className="image">
                <Image src={filter} alt="filter" />
              </div>
              <p>Filters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
