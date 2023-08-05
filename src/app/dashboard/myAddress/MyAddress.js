import React from "react";
import style from "./myAddress.module.css";
import Image from "next/image";
import image from "../../../public/images/remove-location.png"
// import button from "../../../public/img/button.png"
const MyAddress = () => {
  return (
    <div className={style.container}>
      <p className={style.header}>نشانی ها </p>
      <div className={style.address}>
        <Image src={image}/>
        <div className={style.addAddress}>
            <h5>
            شما نشانی ثبت شده‌ای ندارید
            </h5>
            <p>
            با استفاده از دکمه افزودن آدرس جدید نشانی + خود را ثبت کنید
            </p>
        </div>
        <button className={style.button}>
             افزودن ادرس جدید +
        </button>
      </div>
    </div>
  );
};

export default MyAddress;
