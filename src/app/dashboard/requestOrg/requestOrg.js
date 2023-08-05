"use client";
import style from "./requestOrg.module.css";
import React, { useState } from "react";
export default function RequestOrg(props) {
  const [steps, setsteps] = useState([
    {
      id: 1,
      number: "#",
      reqNum: "درخواست# ",
      residNum: "قبض#",
      daryaftData: "اطلاعات دریافت",
      tahvilData: "اطلاعات تحویل",
      vaziatDarkhast: "وضعیت درخواست",
      vaziatResid: "وضعیت قبض",
      isActive: true,
      status: "",
    },
    {
      id: 2,
      number: 1,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
      status: 1,
    },
    {
      id: 3,
      number: 2,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
      status: 2,
    },
    {
      id: 4,
      number: 3,
      reqNum: "345",
      residNum: "5678",
      daryaftData: " چهارم ابان - محل کار دوم",
      tahvilData: " چهارم ابان - محل کار دوم",
      vaziatDarkhast: "متن تستی میبلاشد ",
      vaziatResid: " ",
      isActive: true,
      status: 3,
    },
  ]);
  const chooseStyle = (status) => {
    if (status == 1) {
      return style.firstStatus;
    }
    if (status == 2) {
      return style.secondStatus;
    }
    if (status == 3) {
      return style.lastStatus;
    }
  };
  const selectStyle = (status) =>{
    console.log('he',status)
    if (status == 1) {
        return style.firstSituation;
      }
      if (status == 2) {
        return style.secondSituation;
      }
      if (status == 3) {
        return style.lastSituation;
      }
  }
  return (
    <div className={style.container}>
      <h3 className={style.header}>لیست درخواست های شما</h3>
      <div className={style.border}>
        <div className={style.lineBorder}>
          <div className={style.firstLine}></div>
          <div className={style.srcondLine}></div>
          <div className={style.lastLine}></div>
        </div>
        <div className={style.textBorder}>مرتب سازی</div>
      </div>
      <div className={style.data}>
        {steps.map((steps) => (
          <div className={style.table}>
            <div className={style.number}>{steps.number}</div>
            <div className={style.numReq}>{steps.reqNum}</div>{" "}
            <div className={style.numResid}>{steps.residNum}</div>{" "}
            <div className={style.daryaftData}>{steps.daryaftData}</div>{" "}
            <div className={style.tahvilData}>{steps.tahvilData}</div>{" "}
            <div
              className={`${style.vaziatDarkhast} ${chooseStyle(
                steps?.status
              )}`}
            >
              {steps.vaziatDarkhast}
            </div>
            <div className={`${style.vaziatResid} ${selectStyle(steps?.status)}`}>{steps.vaziatResid}</div>
          </div>
        ))}
      </div>
      <div className={style.pageNumber}>
        <button className={style.nextButton}></button>
        <div className={style.page}>صفحه 1 از 10 </div>
        <button className={style.nextButton}></button>
      </div>
    </div>
  );
}
