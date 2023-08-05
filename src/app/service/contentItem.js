import style from "./service.module.css";
import Image from "next/image";

const ContentItem = () => {
  return (
    <div className={style.name_service}>
      <Image src={img} />
      <h3> {header} </h3>
      <p>
        {text}
      </p>
    </div>
  );
};

export default ContentItem;
