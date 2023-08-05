"use client";
import { useState } from "react";
import { Image } from "next/image";
import style from "./service.module.css";
import inn from "../../../public/img/inn.png";
import image1 from "../../../public/img/Urgent_G.png";
import image2 from "../../../public/img/Sewing_B.png";
import image3 from "../../../public/img/Colouring_G.png";
import image4 from "../../../public/img/Press_G.png";
import image5 from "../../../public/img/more.png";
import image6 from "../../../public/img/Spotting_G.png";
import Number1 from "./components/number1";
import Number2 from "./components/number2";
import Number3 from "./components/number3";
import Number4 from "./components/number4";
import Number5 from "./components/number5";
import Number6 from "./components/number6";
import ServiceItem from "./serviceItem";

const Service = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      img: image1,
      text: "جالباسی",
      isActive: false,
      type: "jalebasi",
    },
    {
      id: 2,
      img: image2,
      text: "نخ و سوزن",
      isActive: false,
      type: "dokht",
    },
    {
      id: 3,
      img: image3,
      text: "ظبقه بندی رنگ ",
      isActive: false,
      type: "rang",
    },
    {
      id: 4,
      img: image4,
      text: "بخارشویی",
      isActive: false,
      type: "bokhar Shoei",
    },
    {
      id: 5,
      img: image5,
      text: " مشاهده خدمات بیشتر ",
      isActive: false,
      type: "see more",
    },
    {
      id: 6,
      img: image6,
      text: "  اتوکشی",
      isActive: false,
      type: "otoo",
    },
  ]);
  const [type, setType] = useState("dokht");
  const selectedItem = (targetId) => {
    setItem((perviosItem) => {
      return perviosItem.map((item) => {
        if (item.id == targetId) {
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
    <div className={style.service}>
      <div className={style.service_header}>
        <h1>سرویس مورد نظر خود را انتخاب کنید</h1>
        <h3>سرویس های پاکان</h3>
      </div>
      <div className={style.serviceSubOrg}>
        <div className={style.service_sub}>
        {
    type === "dokht" && <Number1 />
  }
  {
    type === "rang" && <Number2 />
  }
  {
    type === "bokhar Shoei" && <Number3 />
  }
  {
    type === "see more" && <Number4 />
  }
  {
    type === "otoo" && <Number5 />
  }
  {
    type === "jalebasi" && <Number6 />
  }
          <div className={style.another_service}>
            {item.map((val, index) => (
              <ServiceItem
                key={index}
                image={val.img}
                text={val.text}
                onClick={() => {
                  selectedItem(val?.id);
                  setType(val?.type)
                }}
                isActive={val.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
