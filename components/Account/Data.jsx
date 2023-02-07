import Arrow_Up_Right from "./Arrow_Up_Right";
import Data_Chill from "./Data_Chill";

const Data = () => {
  return (
    <div className="data">
      <div className="data-chill">
        <div className="data__are1">
          <div className="data__are1-chill">
            <div className="sales">
              <div className="header">
                <div className="text">
                  <span>Total Sales</span>
                </div>
                <div className="image">
                  <Arrow_Up_Right />
                </div>
              </div>
              <div className="data">
                <span className="data-1">12 NFTs</span>
                <span className="data-2">26.12 BNB</span>
              </div>
            </div>
            <div className="purchase">
              <div className="header">
                <div className="text">
                  <span>Total Purchase</span>
                </div>
                <div className="image">
                  <Arrow_Up_Right />
                </div>
              </div>
              <div className="data">
                <span className="data-1">18 NFTs</span>
                <span className="data-2">26.12 BNB</span>
              </div>
            </div>
            <div className="minted">
              <div className="header">
                <div className="text">
                  <span>Total Minted</span>
                </div>
                <div className="image">
                  <Arrow_Up_Right />
                </div>
              </div>
              <div className="data">
                <span className="data-1">142 NFTs</span>
              </div>
            </div>
            <div className="collected">
              <div className="header">
                <div className="text">
                  <span>Total Collected</span>
                </div>
                <div className="image">
                  <Arrow_Up_Right />
                </div>
              </div>
              <div className="data">
                <span className="data-1">12 NFTs</span>
              </div>
            </div>
            <div className="about">
              <div className="header">
                <div className="text">
                  <span>About the User</span>
                </div>
                <div className="image">
                  <Arrow_Up_Right />
                </div>
              </div>
              <div className="data">
                <span className="data-about">
                  Last Sale Price Monfters, a group of monsters with a unique
                  philosophy in the world of NFT. Their purpose is to find the
                  real shining treasures in the world of NFT and bring them to
                  more people.Monfters Club NFTs are the genesis NFTs of
                  MonfterVerse. Limited edition of 8,000 editions, each with a
                  different combination of cosmetic elements.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Data_Chill />
      </div>
    </div>
  );
};

export default Data;
