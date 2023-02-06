import Image from "next/image";
// wizard
import imageWizard from "../../public/home/wizard/image.png";
const Wizard = () => {
  return (
    <div className="wizard">
      <div className="text">
        <div className="head">
          <p>Become a wizard with the</p>
          <p>Coco NFT Academy</p>
        </div>
        <div className="body">
          <p>
            Head over to our NFT Academy to learn all about NFTs. Our team is
            contantly developing new articles and videos to help you better
            understand how to create, collect, sell, showcase your digital
            assets.
          </p>
        </div>
        <div className="button">
          <button className="btn">Start Learning</button>
        </div>
      </div>
      <div className="image">
        <div className="image_are">
          <Image src={imageWizard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wizard;
