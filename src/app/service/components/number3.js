import style from "../service.module.css";
import Image from "next/image";
import inn from "../../../public/img/inn.png";

const Number3= () => {
  return (
    <div className={style.name_service}>
      <Image src={inn} />
      <h3> بخار شویی</h3>
      <p>
45      </p>
    </div>
  );
};

export default Number3;
