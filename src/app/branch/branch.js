import style from "./branch.module.css"
import Image from "next/image";
import callingBack from "../../public/images/outline_wifi_calling_3_black_24dp.png"
import outLineLoc from "../../public/images/outline_location_on_black_24dp.png"

const Branch = () => {
  return (
    <div className={style.branch}>
      <div className={style.head_branch}>
        <h1>نزدیک شما هستیم</h1>
        <p>شعبه‌ها</p>
      </div>
      <div className={style.branch_content}>
        <div className={style.branch_address}>
          <div>ولنجک</div>
          <div className={style.noghtechin}>
            ....................................
          </div>
          <div id={style.center}>مرکزی</div>
          <div className={style.noghtechin}>
            ....................................
          </div>
          <div>اپال</div>
        </div>
        <div className={style.address}>
          تهران ، خیابان سپهبد قرنی، جنب بیمارستان آپادانا، شماره ۱۳۹ و ۱۴۱
        </div>
        <div className={style.phone}>
          <div>۰۲۱ </div>
          <div>۸۸۳۴۳۷۶۶ </div>
        </div>
        <div className={style.phone_icon}>
          <Image src={callingBack}/>
          <div className={style.khat}></div>
          <Image src={outLineLoc} />
        </div>
      </div>
    </div>
  );
};

export default Branch;
