import Image from "next/image";
import download from "../../../public/img/download.png";
import star1 from "../../../public/img/star1.png";
import star from "../../../public/img/star.png";
import style from "./comments.module.css"

const Story = () => {
  return (
    <div className={style.comment_container}>
      <div className={style.photo_comment}>
        <Image src={download} className={style.photo}/>
      </div>
      <div className={style.text_comment}>
        <div className={style.name}>نام فرضی مشتری</div>
        <div className={style.star}>
          <Image src={star1} className={style.stars}/>
          <Image src={star1} className={style.stars}/>
          <Image src={star1} className={style.stars}/>
          <Image src={star} className={style.stars}/>
          <Image src={star} className={style.stars}/>
        </div>
        <p className={style.text}>
          لورم ایپسوم متن سصنعت چید سادگی نامفهوم از ناختگی با تولوم از صنعت چید
          سادگی نامفهوم از نعت چاپ و با استفاده از طراحان گرافیکهوم از ناختگی با
          تولوم گرافیکهوم از ناختگی با تولوم از ت.
        </p>
      </div>
    </div>
  );
};

export default Story;
