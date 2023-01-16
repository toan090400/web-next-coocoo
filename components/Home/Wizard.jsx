import style from "../../styles/Home/Home.module.scss";
import Image from "next/image";
// wizard
import imageWizard from "../../public/home/wizard/image.png";
const Wizard = () => {
  return (
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
  );
};

export default Wizard;
