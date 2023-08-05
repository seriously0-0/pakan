// import React from "react";
import Image from "next/image";
import { useState } from "react";
import style from "./userData.module.css";
import profile from "../../../public/images/ermiya-ghasemi-amazing-ir-14.png";
import Day from "./day";
import Year from "./year";
import Month from "./month";
import button from "../../../public/images/butt.png";
const Credit = () => {
  const [amount, setAmount] = useState("");
  const raise = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <p className={style.header}> اطلاعات کاربری</p>
        <div className={style.data}>
          <Image src={profile} className={style.profile} />
          <div className={style.inputs}>
            <div className={style.textInputs}>
              <input type="text" placeholder="نام" className={style.name} />
              <input
                type="text"
                placeholder=" نام خانوادگی"
                className={style.name}
              />
              <input
                type="email"
                placeholder="ادرس پست الکترونیک"
                className={style.name}
                id={style.email}
              />
            </div>
            <div className={style.dateContainer}>
              <div className={style.choice}>
                <div className={style.textBirth}>تاریخ تولد</div>
                <div className={style.birthDate}>
                  <Day className={style.date} />
                  <Month className={style.date} />
                  <Year className={style.date} />
                </div>
              </div>
              <div className={style.gender}>
                <div className={style.lable}>جنسیت</div>
                <div className={style.genderOption}>
                  <label className={style.option}>خانوم</label>
                  <input type="radio" placeholder="خانوم" />
                </div>
                <div className={style.genderOption}>
                <label className={style.option}>اقا</label>
                <input type="radio" placeholder="اقا" />
                </div>
              </div>
            </div>
          </div>
          <button className={style.button}>
            <Image src={button} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Credit;
