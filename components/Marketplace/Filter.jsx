import Image from "next/image";
// image
import search from "../../public/merketplace/filter/search.png";
import dow from "../../public/merketplace/filter/dow.png";
import icon from "../../public/merketplace/filter/icon.png";
import button1 from "../../public/merketplace/filter/button1.png";
import button2 from "../../public/merketplace/filter/button2.png";
import check from "../../public/merketplace/filter/check.png";
import filter from "../../public/merketplace/filter/filter.png";
const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__search">
        <form action="">
          <div className="filter__image">
            <Image src={search} alt="search" />
          </div>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="filter-chill">
        <div className="filter__are1">
          <div className="filter__box">
            <div className="filter__box1">
              <div className="filter__item">
                <div className="filter__text">
                  <p>Category</p>
                </div>
                <div className="filter__btn">
                  <p>Select One</p>
                  <div className="filter__image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
              <div className="filter__item">
                <div className="filter__text">
                  <p>Collection</p>
                </div>
                <div className="filter__btn">
                  <p>Select One</p>
                  <div className="filter__image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="filter__box2">
              <div className="filter__item">
                <div className="filter__text">
                  <p>Collection</p>
                </div>
                <div className="filter__btn">
                  <p>Select One</p>
                  <div className="filter__image">
                    <Image src={dow} alt="dow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter__length">
            <div className="filter__header">
              <div className="filter__text">
                <p>Price Range</p>
              </div>
            </div>
            <div className="filter__select">
              <div className="filter__length-item">
                <div className="filter__length-btn">
                  <p>Min</p>
                  <div className="filter__length-image">
                    <Image src={icon} alt="icon" />
                  </div>
                </div>
              </div>
              <div className="filter__length-item">
                <div className="filter__length-btn">
                  <p>Max</p>
                  <div className="filter__length-image">
                    <Image src={icon} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter__are2">
          <div className="filter__box1">
            <p>Show NSFW</p>
            <div className="filter__image">
              <Image src={button1} alt="button1" />
            </div>
          </div>
          <div className="filter__box2">
            <p>Verified only</p>
            <div className="filter__image-check">
              <Image src={check} alt="check" />
            </div>
            <div className="filter__image">
              <Image src={button2} alt="button2" />
            </div>
          </div>
        </div>
        <div className="filter__are3">
          <div className="filter__are3-chill">
            <div className="filter__btn">
              <div className="filter__image">
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
