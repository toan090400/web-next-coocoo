import style from "../../styles/Home/Home.module.scss";
const Finall = () => {
  return (
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
  );
};

export default Finall;
