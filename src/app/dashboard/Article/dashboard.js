// import React, { useState } from "react";
"use client";
import { useState } from "react";
import style from "./Article.module.css";
import BoxComponent from "../boxComponent/boxComponent";
import Request from "../req_header_box/requestContent";
import CounterAcc from "../req_header_box/counterAcc";

export default function Dashboard({ extraClass }) {
  const [headerBox, setheaderBox] = useState([
    {
      right: "وضعیت آخرین درخواست",
      left: "مشاهده همه",
      subRight: "شماره درخواست ",
      subLeft: "۹۰۷۷۴",
      id: 1,
      child: <Request />,
    },
    {
      right: "گردش حساب ",
      left: "مشاهده همه",
      subRight: "موجودی کیف پول شما",
      subLeft: "ریال ۴۵۰.۰۰۰",
      id: 2,
      child: <CounterAcc />,
    },
  ]);
  
  return (
    <div className={`${style.left_side} ${extraClass}`}>
      <div className={style.dashboard_photo}>
        <div>داشبورد</div>
        <img src="images/Dashboard.png" />
      </div>
      <div className={style.request_box}>
        {headerBox.map((item, index) => (
          <BoxComponent key={index} item={item}>
            {item?.child}
          </BoxComponent>
        ))}
      </div>
    </div>
  );
}
