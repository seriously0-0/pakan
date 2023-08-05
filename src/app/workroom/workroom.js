import Image from "next/image";
import style from "./workroom.module.css";
import screenShot from "../../../public/img/Screenshot (30).png";
import playsolid from "../../../public/images/playSolid.svg"
const Workroom = () => {
  return (
    <div className={style.workroom_pakan}>
      <h1>کارگاه پاکان</h1>
      <h3>
        بهره‌گیری از پیشرفته‌­ترین تکنولوژی و ماشین‌آلات روز دنیا، نسل جدید
        خشکشویی هوشمند
      </h3>
      <div>
        <Image className={style.video}></Image>
        <div className={style.text_on_video}>
          <Image src={playsolid} className={style.play}/>
          <p>مشاهده ویدیوی معرفی کارگاه</p>
        </div>
      </div>
    </div>
  );
};

export default Workroom;
