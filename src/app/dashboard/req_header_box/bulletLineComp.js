import React from "react";
import style from "./req_header_box.module.css";

export default function BulletLine({ extraClass }) {
  return (
    <div className={`${style.bulletline} ${extraClass}`}>
      {/* <div className={style.line}></div> */}
      <span className={style.bullet}></span>
      <div className={style.line}></div>
    </div>
  );
}
