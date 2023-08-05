"use client";
import style from "./whyPakan.module.css";
// import Image from "next/image";
import Trancking from "../../../public/img/Tracking.png";
import SelectItem from "./selectItem/selectItem";
import { useState } from "react";
const WhyPakan = () => {
  const [item, setItem] = useState([
    {
      img: Trancking,
      text: "ویژگی متمایز شماره یک پاکان",
      id: 1,
      isActive: false,
    },
    {
      img: Trancking,
      text: "ویژگی متمایز شماره دو پاکان",
      id: 2,
      isActive: false,
    },
    {
      img: Trancking,
      text: "ویژگی متمایز شماره سه پاکان",
      id: 3,
      isActive: false,
    },
    {
      img: Trancking,
      text: "ویژگی متمایز شماره چهار پاکان",
      id: 4,
      isActive: false,
    },
  ]);
  console.log(item);

  const changeBorder = (clickedId) => {
    setItem((previosItem) => {
      return previosItem.map((item) => {
        if (item.id === clickedId) {
          return {
            ...item,
            isActive: true,
          };
        } else {
          return {
            ...item,
            isActive: false,
          };
        }
      });
    });
  };
  return (
    <div className={style.why_pakan}>
      <div className={style.pakan_option}>
        <div className={style.head_pakan_option}>
          <h1>چرا پاکان ؟</h1>
          <h3>ویژگی های پاکان</h3>
        </div>
        <div className={style.sub_pakan_option}>
          <div className={style.numbers}>
            <div className={style.number1_pakan_option}>
              <h2>ویژگی متمایز شماره یک پاکان</h2>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، لورم
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
            </div>
          </div>
          {/* <div className={style.center_line}></div> */}
          <div className={style.special_pakan_option}>
            {item.map((val, index) => (
              <SelectItem
                src={val.img}
                key={index}
                text={val.text}
                onClick={() => {
                  changeBorder(val.id);
                }}
                isActive={val?.isActive}
                extraclass={
                  val?.isActive === false
                    ? style.selectComponent_secondClass
                    : style.selectComponent
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPakan;
