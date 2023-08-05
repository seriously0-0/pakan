// import React from "react";
import Image from "next/image";
import { useState } from "react";
import style from "./Credit.module.css";
import shahrBank from "../../../public/images/20.png";
import background from "../../../public/images/IncreaseBalance.png";
import melatBank from "../../../public/images/0020.png";
import button from "../../../public/images/send-msg.png";

const Credit = () => {
  const [amount, setAmount] = useState("");
  const raise = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <p>کیف پول</p>
        <div className={style.credit}>
          <div className={style.headCredit}>
            <div>اعتبار فعلی</div>
            <div>450.000 ریال</div>
          </div>
          <div className={style.banks}>
            <div className={style.nameBank}>
              <div>انتخاب درگاه بانکی</div>
              <div>بانک شهر</div>
            </div>
            <div className={style.bankLogo}>
              <Image src={shahrBank} />
              <Image src={melatBank} />
            </div>
          </div>
          <button className={style.button}>
            <Image src={button}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Credit;
