import Image from "next/image";
import Button_Dark from "../Image/Button-Dark/Button-Dark";
import Button_Lingth from "../Image/Button-Lingth/Button-Lingth";
import Icon_Dow from "./Icon-Arrow-Dow";
import Icon_Dark from "../Image/Icon-Number-Dark/Icon-Number-Dark";
// image
import search from "../../public/merketplace/filter/search.png";
import check from "../../public/merketplace/filter/check.png";
import filter from "../../public/merketplace/filter/filter.png";
// change
import Button_Dark_Change from "../Image/Change/Button-Dark/Button-Dark";
import Button_Lingth_Change from "../Image/Change/Button-Lingth/Button-Lingth";

const Filter = () => {
  const handlerFillter = () => {
    const fillter = document.querySelector("#fillter");
    fillter.classList.toggle("open");
  };
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
                    <Icon_Dow />
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
                    <Icon_Dow />
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
                    <Icon_Dow />
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
                  <div className="text">
                    <p>Min</p>
                  </div>
                  <div className="length-image">
                    <Icon_Dark />
                  </div>
                </div>
              </div>
              <div className="length-item">
                <div className="length-btn">
                  <div className="text">
                    <p>Max</p>
                  </div>
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
              <Button_Lingth />
            </div>
            <div className="image change">
              <Button_Dark_Change />
              <Button_Lingth_Change />
            </div>
          </div>
          <div className="box2">
            <div className="box2-text">
              <div className="text">
                <p>Verified only</p>
              </div>
              <div className="image-check">
                <Image src={check} alt="check" />
              </div>
            </div>
            <div className="image">
              <Button_Dark />
            </div>
            <div className="image change">
              <Button_Dark_Change />
              <Button_Lingth_Change />
            </div>
          </div>
        </div>
        <div className="are3">
          <div className="are3-chill">
            <div className="btn" id="fillter">
              <div className="fillter">
                <div className="image">
                  <Image onClick={handlerFillter} src={filter} alt="filter" />
                </div>
                <p>Filters</p>
                <p>Sort by</p>
              </div>
              <div className="dev">
                <div className="dev-chill"></div>
              </div>
              <div className="list">
                <div className="list-chill">
                  <p>Top</p>
                  <p>Trending</p>
                  <p>Recently added</p>
                  <p>Price: Low to High</p>
                  <p>Price: High to Low</p>
                  <p>Ending soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
