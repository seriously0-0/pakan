"use client";
// import React, { useState } from "react";
import React, { useState } from "react";
import User from "../User/User";
import styel from "./menu.module.css";
import CompMenu from "../compMenu/CompMenu";
import Credit from "../credit/Credit";
import Dashboard from "../Article/dashboard";
import UserData from "../userData/UserData";
import Wallet from "../wallet/wallet";
import ChangePass from "../changePass/ChangePass";
import MyAddress from "../myAddress/MyAddress";
import Request from "../req_header_box/requestContent";
import Turnover from "../turnoverr/turnover";
import RequestOrg from "../requestOrg/requestOrg";
// import { useClient } from 'react-server-components';

// useClient();

export default function Menu() {
  const [menus, setMenus] = useState([
    // { title: "کیف‌ پول ۴۵.۰۰۰ ریال", id: 1, isActive: false, type: "Wallet" },
    { title: "داشبورد", id: 2, isActive: false, type: "Dashboard" },
    { title: "افزودن اعتبار", id: 3, isActive: false, type: "credit" },
    { title: "اطلاعات کاربری", id: 4, isActive: false, type: "UserData" },
    { title: "تغییر رمز عبور", id: 5, isActive: false, type: "changePass" },
    { title: "آدرس های من", id: 6, isActive: false, type: "SaveAddress" },
    { title: "گردش حساب", id: 7, isActive: false, type: "turnover" },
    { title: "درخواست ها", id: 8, isActive: false, type: "Reqs" },
    { title: " خروج", id: 9, isActive: false, type: "exit" },
  ]);

  const [menuType, setMenuType] = useState("Dashboard");

  const changeBackground = (targetId) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) => {
        if (menu.id === targetId) {
          return {
            ...menu,
            isActive: true,
          };
        } else {
          return {
            ...menu,
            isActive: false,
          };
        }
      })
    );
  };
  return (
    <div className={styel.container}>
      <div className={styel.right_side}>
        <div className={styel.user}>پروفایل کاربری</div>
        <div className={styel.profile_box}>
          <div className={styel.name_number}>
            <div className={styel.pro_photo}></div>
            <div>
              <User>فراز حسنلو</User>
              <User>۰۹۱۹۲۰۷۰۱۸۹</User>
            </div>
          </div>
          <div>
            <div className={styel.kifPol}>
              <div className={styel.kif}></div>
              <p>کیف پول 45000 ریال </p>
            </div>{" "}
            {menus.map((val, index, isActive) => (
              <CompMenu
                item={val}
                key={index}
                isActive={val?.isActive}
                onclick={() => {
                  changeBackground(val.id);
                  setMenuType(val.type);
                }}
                
                className={val?.isActive === true ? styel.wallet : styel.option}
              />
            ))}
            {/* {menuType === "exit" && <MyAddress />} */}
          </div>
        </div>
      </div>
      {menuType === "Dashboard" && <Dashboard />}
      {menuType === "credit" && <Credit />}
      {menuType === "UserData" && <UserData />}
      {menuType === "changePass" && <ChangePass />}
      {menuType === "SaveAddress" && <MyAddress />}
      {/* {menuType === "turnover" && <Turnover />} */}
      {menuType === "Reqs" && <RequestOrg />} 
    </div>
  );
}
