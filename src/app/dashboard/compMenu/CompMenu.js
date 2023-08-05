import React from "react";
import style from "../menu/menu.module.css";

export default function CompMenu({
  item,
  number,
  onclick,
  className,
  isActive
}) {
  console.log("lpok", item);
  return (
    <>
      <div
        className={`${
          number == 8 ? style.loge_out : style.options
        } ${className}`}
        onClick={onclick}
      >
        <div>
          <div onClick={onclick} className={isActive ? style.tick_op : style.tick_opSecond}></div>
          <p>{item.title}</p>
        </div>
      </div>
    </>
  );
}
