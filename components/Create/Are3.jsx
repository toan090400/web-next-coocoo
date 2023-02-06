import Image from "next/image";
// image
import Crad from "../../public/Card/item.png";
import Icon_lingth from "../Image/Icon-Number-Lingth/Icon-Number-Lingth";
const Are3 = () => {
  return (
    <div className="are3">
      <div className="box">
        <div className="item">
          <div className="header">
            <p>Preview</p>
          </div>
          <div className="image">
            <Image src={Crad} alt="item" />
          </div>
          <div className="text">
            <p>Name of Collectible</p>
            <p className="bottom">Name of Collectible</p>
          </div>
          <div className="number">
            <div className="image">
              <Icon_lingth />
            </div>
            <div className="text">
              <p>0.25 BNB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Are3;
