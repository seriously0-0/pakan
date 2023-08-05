import style from "../whyPakan.module.css";
import Image from "next/image";
import Trancking from "../../../public/img/Tracking.png";

const SelectItem = ({ img, text, onClick, extraclass,isActive }) => {
  return (
    <div onClick={onClick} className={!isActive ? style.container : style.containerClick} >
      <div className={`${style.selectComponent} ${extraclass}`}>
        <Image src={Trancking} className={isActive ? style.image : style.image_secondClass} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SelectItem;
