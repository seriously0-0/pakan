// import React from "react";
import style from "./pakanDash.module.css";
// import Menu from "../menu/menu";
// import Article from "../Article/Article";
import Menu from "../menu/menu";

export default function PakanDash() {
  return (
    <div className={style.dashboard}>
      <Menu/>
    </div>
  );
}
