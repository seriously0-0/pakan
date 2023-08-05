import React from "react";
import style from "./turnoverr.module.css"
import TurnoverDetail from "./turnoverDetail";
const Turnover = () => {
//   const [wallet, setwallet]= useState([
//     {number:"#" , num_req:"شماره درخواست" , date:"تاریخ", price:"مبلغ تراکنش" , money:'باقی مانده' , id:1} ,
//     {number:"1" , num_req:"3456" , date:"۱۳۹۸/۱۲/۳۰", price:"۵۴.۰۰۰" , money:'۶۹.۰۰۰ ' , id:2} ,
//     {number:"2" , num_req:" 5678" , date:"۱۳۹۸/۱۲/۳۰" , price:"۵۴.۰۰۰", money:' ۶۹.۰۰۰' , id:3} ,
//     {number:"3" , num_req:" 2345" , date:"۱۳۹۸/۱۲/۳۰", price:"۵۴.۰۰۰" , money:' ۶۹.۰۰۰' , id:4} ,

// ])
  return (
    <>
      <div className={style.container}>
        <p>گردش حساب </p>
        <div className={style.border}>
          <div className={style.firstLine}></div>
          <div className={style.srcondLine}></div>
          <div className={style.lastLine}></div>
        </div>
        <div>
          مرتب سازی
        </div>
    <TurnoverDetail/>
      </div>
    </>
  );
};

export default Turnover;
