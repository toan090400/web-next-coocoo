import style from "../../styles/Home/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
// menu
import logo from "../../public/home/menu/logo.png";
import search from "../../public/home/menu/search.png";
import vector from "../../public/home/menu/vector.png";
import user_menu from "../../public/home/menu/user-menu.png";
// frame
import frame from "../../public/home/frame/frame.png";
import plus from "../../public/home/frame/plus.png";
import user_frame from "../../public/home/frame/user-frame.png";
// hotDrops
import itemHotImage from "../../public/home/hotDrops/item.png";
import logohotDrops from "../../public/home/hotDrops/logo.png";
import hotVector from "../../public/home/hotDrops/vector.png";
// topList
import vectorTopList from "../../public/home/topList/vector.png";
import checkImage from "../../public/home/topList/check.png";
// discoverMore
import logoDiscoverMore from "../../public/home/discoverMore/logo.png";
import vectorDiscoverMore from "../../public/home/discoverMore/vector.png";
import heardDiscoverMore from "../../public/home/discoverMore/heard.png";
import itemDiscoverMore from "../../public/home/discoverMore/item.png";
// wizard
import imageWizard from "../../public/home/wizard/image.png";
// footer
import logoFooter from "../../public/home/footer/logo.png";
import dis from "../../public/home/footer/dis.png";
import inta from "../../public/home/footer/inta.png";
import tw1 from "../../public/home/footer/tw1.png";
import tw2 from "../../public/home/footer/tw2.png";
const Home = ({ itemHot, topList, discoverMore }) => {
  return (
    <div className="main">
      <div className={style.menu}>
        <div className={style.container}>
          <div className={style.are1}>
            <div className={style.logo}>
              <Image src={logo} alt="" />
            </div>
            <div className={style.list}>
              <Link href="">Marketplace</Link>
              <Link href="">Rankings</Link>
              <Link href="">About</Link>
            </div>
          </div>
          <div className={style.are2}>
            <form action="">
              <Image src={search} alt="" />
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className={style.are3}>
            <div className={style.user}>
              <button>Create</button>
              <Image src={user_menu} alt="" />
              <Image src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.frame}>
        <div className={style.container}>
          <div className={style.text}>
            <h1>
              CREATE
              <Image src={plus} alt="" />
              COLLECT
            </h1>
            <p>A BINANCE SMART CHAIN NFT MARKETPLACE</p>
          </div>
          <div className={style.content}>
            <Image src={frame} alt="" />
            <div className={style.user}>
              <div className={style.are1}>
                <div className={style.user}>
                  <p>Creator</p>
                  <div className={`${style.user_info} ${style.fir}`}>
                    <Image src={user_frame} alt="" />
                    <p>Arkhan17</p>
                  </div>
                </div>
                <div className={style.user}>
                  <p>Owner</p>
                  <div className={`${style.user_info} ${style.sec}`}>
                    <Image src={user_frame} alt="" />
                    <p>Arkhan17</p>
                  </div>
                </div>
                <div className={style.user}>
                  <p>Collection</p>
                  <div className={`${style.user_info} ${style.thr}`}>
                    <Image src={user_frame} alt="" />
                    <p>Arkhan17</p>
                  </div>
                </div>
              </div>
              <div className={style.are2}>
                <h1>Abstr Gradient NFT</h1>
              </div>
              <div className={style.are3}>
                <div className={style.bill}>
                  <p className={style.bid}>Current Bid</p>
                  <p className={style.bnb}>0.25 BNB</p>
                  <p className={style.price}>$182.00</p>
                </div>
                <div className={style.time}>
                  <div className={style.text}>
                    <p>Auction ending in</p>
                    <p className={style.textTime}>
                      12<span>H</span> 43<span>M</span> 42<span>S</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.are4}>
                <button>Bid Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.hotDrops}>
        <div className={style.title}>
          <div className={style.text}>
            <h1 className={style.hot}>HOT</h1>
            <h1 className={style.drops}>DROPS</h1>
            <Image src={logohotDrops} alt="" />
          </div>
        </div>
        <div className={style.item}>
          <div className={style.card}>
            {itemHot.map((item) => {
              return (
                <div key={item.id} className={style.card_item}>
                  <div className={style.box}>
                    <Image src={itemHotImage} alt="" />
                    <p className={style.text1}>{item.name}</p>
                    <p className={style.text2}>{item.discription}</p>
                    <p className={style.bnb}>{item.bnb}</p>
                    <div className={style.button}>
                      <p className={style.time}>{item.time}</p>
                      <button className={style.btn}>Bid Now</button>
                      <Image src={hotVector} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.topList}>
        <div className={style.box}>
          <div className={style.are}>
            <p className={style.top}>Top Collections</p>
            <p className={style.time}>
              Last 7 days <Image src={vectorTopList} alt="" />
            </p>
            {topList.map((item) => {
              return (
                <div key={item.id} className={style.userBox}>
                  <p className={style.number}>{item.id}</p>
                  {item.check ? (
                    <>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </>
                  ) : (
                    <Image src={item.image} alt="" />
                  )}
                  <div className={style.adress}>
                    <p className={style.text}>{item.name}</p>
                    <p className={style.textNumber}>{item.number}</p>
                  </div>
                  <p
                    className={
                      item.status ? style.price : `${style.price} ${style.err}`
                    }
                  >
                    {item.bnb}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={style.are}>
            <p className={style.top}>Top Sellers</p>
            <p className={style.time}>
              Last 7 days <Image src={vectorTopList} alt="" />
            </p>
            {topList.map((item) => {
              return (
                <div key={item.id} className={style.userBox}>
                  <p className={style.number}>{item.id}</p>
                  {item.check ? (
                    <>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </>
                  ) : (
                    <Image src={item.image} alt="" />
                  )}
                  <div className={style.adress}>
                    <p className={style.text}>{item.name}</p>
                    <p className={style.textNumber}>{item.number}</p>
                  </div>
                  <p
                    className={
                      item.status ? style.price : `${style.price} ${style.err}`
                    }
                  >
                    {item.bnb}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={style.are}>
            <p className={style.top}>Top Buyers</p>
            <p className={style.time}>
              Last 7 days <Image src={vectorTopList} alt="" />
            </p>
            {topList.map((item) => {
              return (
                <div key={item.id} className={style.userBox}>
                  <p className={style.number}>{item.id}</p>
                  {item.check ? (
                    <>
                      <Image className={style.start} src={item.image} alt="" />
                      <Image className={style.check} src={checkImage} alt="" />
                    </>
                  ) : (
                    <Image src={item.image} alt="" />
                  )}
                  <div className={style.adress}>
                    <p className={style.text}>{item.name}</p>
                    <p className={style.textNumber}>{item.number}</p>
                  </div>
                  <p
                    className={
                      item.status ? style.price : `${style.price} ${style.err}`
                    }
                  >
                    {item.bnb}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.discoverMore}>
        <div className={style.conatainerMore}>
          <div className={style.are1}>
            <div className={style.text}>
              <p>
                DISCOVER <span>MORE</span>
              </p>
              <Image src={logoDiscoverMore} alt="" />
            </div>
          </div>
          <div className={style.are2}>
            <div className={style.box}>
              <div className={style.category}>
                <p className={style.all}>All Categories</p>
                <p>Art</p>
                <p>Celebrities</p>
                <p>Music</p>
                <p>Photography</p>
                <p>Sports</p>
                <p>Trading Cards</p>
                <p>Utility</p>
                <p>Virtual Worlds</p>
              </div>
              <div className={style.filer}>
                <p className={style.filters}>
                  <Image src={vectorDiscoverMore} alt="" />
                  Filters
                </p>
              </div>
            </div>
          </div>
          <div className={style.are3}>
            <div className={style.box_card}>
              {discoverMore.map((item) => {
                return (
                  <div key={item.id} className={style.card}>
                    <div className={style.box}>
                      <Image src={itemDiscoverMore} alt="" />
                      <p className={style.text1}>{item.name}</p>
                      <p className={style.text2}>{item.discription}</p>
                      <p className={style.bnb}>{item.bnb}</p>
                      <div className={style.button}>
                        <p className={style.time}>{item.time}</p>
                        <button className={style.btn}>Bid Now</button>
                        <Image src={heardDiscoverMore} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.are4}>
            <button className={style.btn}>More NFT&#8217;s</button>
          </div>
        </div>
      </div>
      <div className={style.wizard}>
        <div className={style.text}>
          <div className={style.head}>
            <p>Become a wizard with the</p>
            <p>Coco NFT Academy</p>
          </div>
          <div className={style.body}>
            <p>
              Head over to our NFT Academy to learn all about NFTs. Our team is
              contantly developing new articles and videos to help you better
              understand how to create, collect, sell, showcase your digital
              assets.
            </p>
            <p>Coco NFT Academy</p>
          </div>
          <div className={style.button}>
            <button className={style.btn}>Start Learning</button>
          </div>
        </div>
        <div className={style.image}>
          <div className={style.image_are}>
            <Image src={imageWizard} alt="" />
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.conatiner}>
          <div className={style.box1}>
            <div className={style.logo}>
              <Image src={logoFooter} alt="" />
            </div>
            <div className={style.text}>
              <p>
                The largest digital marketplace for crypto collectibles and
                non-fungible tokens (NFTs) on the Binance Smart Cahin. Create,
                collect, sell, and showcase exclusive digital items.
              </p>
            </div>
            <div className={style.icon}>
              <Image className={style.tw1} src={tw1} alt="" />
              <Image className={style.tw2} src={tw2} alt="" />
              <Image className={style.dis} src={dis} alt="" />
              <Image src={inta} alt="" />
            </div>
          </div>
          <div className={style.box2}>
            <div className={style.text}>
              <h3>Marketplace</h3>
              <p>All NFTs</p>
              <p>Art</p>
              <p>Collectibles</p>
              <p>Music</p>
              <p>Photography</p>
              <p>Sports</p>
              <p>Trading Cards</p>
              <p>Utility</p>
              <p>Virtual Worlds</p>
            </div>
          </div>
          <div className={style.box3}>
            <div className={style.text}>
              <h3>My Account</h3>
              <p>Profile</p>
              <p>Favorites</p>
              <p>My Collections</p>
              <p>Settings</p>
            </div>
          </div>
          <div className={style.box4}>
            <div className={style.text}>
              <h3>Stay in the loop</h3>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
              </p>
              <form action="">
                <div className={style.email}>
                  <input type="text" placeholder="Enter your email address.." />
                  <button>Subscibe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={style.finall}>
        <div className={style.container}>
          <div className={style.box1}>
            <div className={style.text}>
              <p>Copyright © 2022 Coco</p>
            </div>
          </div>
          <div className={style.box2}>
            <div className={style.text}>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
