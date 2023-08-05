import React, { useState } from "react";
import style from "./req_header_box.module.css";
import BulletLine from "./bulletLineComp";
import Request from "./requestContent";
import counterAcc from "./counterAcc";

export default function BoxComponent({ item, children }) {
  return (
    <>
      <div className={style.box}>
        <div className={style.num_req} >
            <div>{item.right}</div>
            <div>{item.left}</div>
        </div>
        <div className={style.cln}>
          <div className={style.secound_cln}>
            <div>{item.subRight}</div>
            <div>{item.subLeft}</div>
          </div>
          <div className={style.bullet_line}>{children}</div>
        </div>
      </div>
    </>
  );
}
