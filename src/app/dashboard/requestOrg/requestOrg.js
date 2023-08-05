"use client";
import style from "./requestOrg.module.css"
import React, { useState } from "react";
export default function RequestOrg(props) {
  const [steps, setsteps] = useState([
    {
      id: 1,
      number:"#",
      reqNum:"درخواست# ",
      residNum: "قبض#",
      daryaftData: "اطلاعات دریافت",
      tahvilData: "اطلاعات تحویل",
      vaziatDarkhast: "وضعیت درخواست",
      vaziatResid: "وضعیت قبض",
      isActive: true,
    },
    {
      id: 2,
      number:1,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
    },
    {
      id: 3,
      number:2,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
    },
    {
      id: 4,
      number:3,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
    },
  ]);
  return (
    <div className={style.container}>
      <h3 className={style.header}>لیست درخواست های شما</h3>
      {steps.map((steps) => (
        <div className={style.table}>
          <div className={style.number}>{steps.number}</div>
          <div className={style.numReq}>{steps.reqNum}</div>{" "}
          <div className={style.numResid}>{steps.residNum}</div>{" "}
          <div className={style.daryaftData}>{steps.daryaftData}</div>{" "}
          <div className={style.tahvilData}>{steps.tahvilData}</div>{" "}
          <div className={style.vaziatDarkhast}>{steps.vaziatDarkhast}</div>{" "}
          <div className={style.vaziatResid}>{steps.vaziatResid}</div>s
        </div>
      ))}
    </div>
  );
}
