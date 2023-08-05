"use client";

import React, { useState } from "react";
import style from "./req_header_box.module.css"

export default function CounterAcc(){

    const [wallet, setwallet]= useState([
        {number:"#" , num_req:"شماره درخواست" , date:"تاریخ", price:"مبلغ تراکنش" , money:'باقی مانده' , id:1} ,
        {number:"1" , num_req:"3456" , date:"۱۳۹۸/۱۲/۳۰", price:"۵۴.۰۰۰" , money:'۶۹.۰۰۰ ' , id:2} ,
        {number:"2" , num_req:" 5678" , date:"۱۳۹۸/۱۲/۳۰" , price:"۵۴.۰۰۰", money:' ۶۹.۰۰۰' , id:3} ,
        {number:"3" , num_req:" 2345" , date:"۱۳۹۸/۱۲/۳۰", price:"۵۴.۰۰۰" , money:' ۶۹.۰۰۰' , id:4} ,

    ])

    return(
        <>
         <div className={style.account}>
             {wallet.map( (wallet)=> (
                <div key={wallet.id}>
                <div>{wallet.number}</div>
                <div>{wallet.num_req}</div>
                <div>{wallet.date}</div>
                <div>{wallet.price}</div>
                <div>{wallet.money}</div>
                </div>
                )
             )}
         </div>
     </>

            
    )
}