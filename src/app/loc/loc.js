import Image from "next/image";
import style from "./loc.module.css"
import currentLoc from "./../../public/images/current-location.svg"
import Loction from "../../../public/images/location-dot-solid.svg"

export default function Loc() {
  return (
    <div className={style.loc}>
      <div className={style.location}>
        <div >
          <Image src={Loction} className={style.material_icons_location}></Image>
        </div>
        <div>
          <input
            type="text"
            placeholder="محله سعادت آباد - ویرایش "
            className={style.loc_input}
            id="loc-input"
          />
        </div>
        <span className={style.material_icons} onclick="location()">
        <Image src={currentLoc} className={style.currentLoc}></Image>
        </span>
        <div className={style.service_request}>
          بررسی محدوده و درخواست سرویس
        </div>
      </div>
    </div>
  );
}
