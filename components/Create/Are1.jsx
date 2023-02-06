import Image from "next/image";
// image
import icon from "../../public/create/box/icon.png";
import Card from "../../public/Card/item.png";
import Item from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
const Are1 = () => {
  return (
    <div className="are1">
      <div className="box">
        <div className="box-1">
          <div className="image">
            <Image src={icon} alt="icon" />
          </div>
          <div className="text">
            <div className="text-1">
              <p>
                Drag and drop <span className="span-1">or</span> browse
                <span className="span-1">files</span>
              </p>
            </div>
            <div className="text-2">
              <p>
                SUPPORTED FILE TYPES:
                <span className="span-2">PNG, GIF, WEBP, MP4, or MP3</span>
              </p>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="item">
            <div className="header">
              <p>Preview</p>
            </div>
            <div className="image">
              <Image src={Card} alt="item" />
            </div>
            <div className="text">
              <p>Name of Collectible</p>
              <p className="bottom">Name of Collectible</p>
            </div>
            <div className="number">
              <div className="image">
                <Item />
              </div>
              <div className="text">
                <p>0.25 BNB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Are1;
