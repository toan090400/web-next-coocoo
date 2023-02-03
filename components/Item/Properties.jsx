import style from "../../styles/Item_Page/Item.module.scss";
const Properties = () => {
  return (
    <div className={style.properties}>
      <div className={style.text}>
        <p>Properties</p>
      </div>
      <div className={style.backgroud}>
        <div className={`${style.item} ${style.open}`}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
        <div className={`${style.item} ${style.open}`}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
        <div className={`${style.item} ${style.open} ${style.hiden}`}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
        <div className={style.item}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
        <div className={style.item}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
        <div className={style.item}>
          <p className={style.item_1}>BACKGROUND</p>
          <p className={style.item_2}>Gradiant BP</p>
          <p className={style.item_3}>4.4% rarity</p>
        </div>
      </div>
    </div>
  );
};

export default Properties;
