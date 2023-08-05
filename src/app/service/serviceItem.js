import style from "./service.module.css"
import Image from "next/image";

const ServiceItem = ({image,text,onClick,isActive}) => {
    return ( 
        <div className={!isActive ? style.firstClassSelectItem : style.secondClassSecondItem} onClick={onClick}>
          <Image src={image} className={isActive ? style.imgFirstClass : style.imgSecondClass}/>
          <p>{text}</p>
        </div>
     );
}
 
export default ServiceItem;