import React from "react";
import style from "./changePass.module.css";
import Image from "next/image";
// import image from "../../../public/img/changePass.png"
import button from "../../../public/images/button.png"
const ChangePass = () => {
  return (
    <div className={style.container}>
      <p>تغییر رمز عبور </p>
      <div className={style.changePass}>
        <div className={style.newPass}>
          <input type="password" placeholder="رمز عبور فعلی" className={style.input}/>
          <input type="password" placeholder="رمز عبور جدید" className={style.input}/>
          <input type="password" placeholder="تکرار رمز عبور جدید" className={style.input}/>
        </div>
        <button className={style.button}><Image src={button}/></button>
      </div>
    </div>
  );
};

export default ChangePass;
