import style from "../service.module.css";
import Image from "next/image";
import inn from "../../../public/img/inn.png";

const Number2 = () => {
  return (
    <div className={style.name_service}>
      <Image src={inn} />
      <h3> طبقه بندی رنگ </h3>
      <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      </p>
    </div>
  );
};

export default Number2;
