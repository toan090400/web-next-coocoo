import Are3 from "./Are3";
import Image from "next/image";
// image
import Button_Dark from "../Image/Button-Dark/Button-Dark";
import dow from "../../public/create/new/dow.png";
import Item from "../Image/Icon-Number-Dark/Icon-Number-Dark";
import schedule from "../../public/create/new/schedule.png";
// change
import Button_Dark_Change from "../Image/Change/Button-Dark/Button-Dark";
import Button_Lingth_Change from "../Image/Change/Button-Lingth/Button-Lingth";
const Are2 = () => {
  return (
    <div className="are2">
      <div className="box">
        <div className="mutil">
          <div className="text">
            <span className="text-1">Multi-File</span>
            <span className="text-2">
              For when you want more than one copy of this NFT
            </span>
          </div>
          <div className="image-text">
            <div className="image-button">
              <Button_Dark />
            </div>
            <div className="image-text-change">
              <Button_Dark_Change />
              <Button_Lingth_Change />
            </div>
          </div>
        </div>
        <div className="number">
          <div className="text-number">
            <span>Number of Copies</span>
          </div>
          <div className="input-number">
            <input type="text" placeholder="Eg : 69" />
          </div>
        </div>
        <div className="title">
          <div className="text-title">
            <span>Title</span>
          </div>
          <div className="input-title">
            <input type="text" placeholder="Eg : Problem Pandas" />
          </div>
        </div>
        <div className="description">
          <div className="text-description">
            <span>Description</span>
          </div>
          <div className="input-description">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description your NFT"
            ></textarea>
          </div>
        </div>
        <div className="category">
          <div className="text-category">
            <span>Category</span>
          </div>
          <div className="input-category">
            <div className="input-category-chill">
              <input type="text" placeholder="Eg : Select One" />
            </div>
            <div className="icon">
              <Image src={dow} alt="dow" />
            </div>
          </div>
        </div>
        <div className="colection">
          <div className="colection-text">
            <span>Collection</span>
          </div>
          <div className="colection-box">
            <div className="but-colection">
              <button>Create New</button>
            </div>
            <div className="text-colection">
              <span>or</span>
              <span>-or-</span>
            </div>
            <div className="input-colection">
              <div className="input-colection-select">
                <input type="text" placeholder="Select One" />
              </div>
              <div className="input-colection-image">
                <Image src={dow} alt="dow" />
              </div>
            </div>
          </div>
        </div>
        <div className="unlock">
          <div className="text-unlock">
            <div className="unlock__are1">
              <span>Unlock Upon Purchase</span>
              <span className="chill">
                Content will be unlocked after successful transaction
              </span>
            </div>
            <div className="unlock__are2">
              <Button_Dark_Change />
              <Button_Lingth_Change />
            </div>
          </div>
          <div className="input-unlock">
            <input
              type="text"
              placeholder="Discount Code, Link to File, etc."
            />
          </div>
        </div>
        <div className="sale">
          <div className="text-sale">
            <span>Sale Type</span>
          </div>
          <div className="box-sale">
            <div className="input-sale">
              <div className="input-sale-select">
                <input type="text" placeholder="Select One" />
              </div>
              <div className="input-sale-image">
                <Image src={dow} alt="dow" />
              </div>
            </div>
            <div className="text-sale">
              <span>Auction or Fixed Price</span>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="text-list">
            <span>List Price / Auction Reserve</span>
          </div>
          <div className="box-list">
            <div className="input-list">
              <div className="input-list-select">
                <input type="text" placeholder="0.25 BNB" />
              </div>
              <div className="input-list-image">
                <Item />
              </div>
              <div className="input-list-image-change">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M5.87383 13L2.94061 15.9324L0 13L2.93322 10.0676L5.87383 13ZM13.0037 5.87216L18.0352 10.9023L20.9685 7.96989L13.0037 0L5.03154 7.96989L7.96476 10.9023L13.0037 5.87216ZM23.0668 10.0676L20.1336 13L23.0668 15.9324L26 13L23.0668 10.0676ZM13.0037 20.1278L7.97215 15.0977L5.03893 18.0301L13.0037 26L20.9685 18.0301L18.0352 15.0977L13.0037 20.1278ZM13.0037 15.9324L15.9369 13L13.0037 10.0676L10.0631 13L13.0037 15.9324Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className="text-list"></div>
          </div>
        </div>
        <div className="royalty">
          <div className="text-royalty">
            <span>Royalty amount</span>
          </div>
          <div className="input-royalty">
            <input type="text" />
          </div>
        </div>
        <div className="offer">
          <div className="text">
            <span className="text-1">Open to Offers</span>
            <span className="text-2">
              Turn this on to allow offers to be made on your NFT
            </span>
          </div>
          <div className="image-text">
            <Button_Dark />
          </div>
          <div className="image-text-change">
            <Button_Dark_Change />
            <Button_Lingth_Change />
          </div>
        </div>
        <div className="list-now">
          <div className="text">
            <span className="text-1">List Now</span>
          </div>
          <div className="image-text">
            <Button_Dark />
          </div>
          <div className="image-text-change">
            <Button_Dark_Change />
            <Button_Lingth_Change />
          </div>
        </div>
        <div className="schedule">
          <div className="text">
            <span className="text-1">Schedule Listing</span>
          </div>
          <div className="image-text">
            <div className="image-text-input">
              <input type="text" placeholder="Nov 25, 2022" />
            </div>
            <div className="image-text-image">
              <Image src={schedule} alt="schedule" />
            </div>
            <div className="image-text-change">
              <span>Calendar</span>
            </div>
          </div>
        </div>
        <Are3 />
        <div className="button">
          <button>Mint Your Masterpiece</button>
        </div>
      </div>
    </div>
  );
};

export default Are2;
