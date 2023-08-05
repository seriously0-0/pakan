"use client";

import React, { useState } from "react";
import style from "./req_header_box.module.css";
import BulletLine from "./bulletLineComp";
// import { useState, useEffect } from 'react';
import { useEffect } from "react";
// import Modal from "../../modal/modal";

export default function Request(props) {
  const [steps, setsteps] = useState([
    { id: 5, title: "تایید شد", isActive: true },
    { id: 4, title: "در حال دریافت", isActive: true },
    { id: 3, title: "آماده شد", isActive: true },
    { id: 2, title: "در حال ارسال", isActive: true },
    { id: 1, title: "تحویل شد", isActive: true },
  ]);
  useEffect(() => {
    console.log(steps);
  }, [steps]);

  const Next = () => {
    // alert("hi");
    setsteps((prevSteps) => {
      return prevSteps.map((step, index) => {
        if (index === 0) {
          console.log("sharte aval");
          return {
            ...step,
            isActive: false,
          };
        } else if (index > 0 && prevSteps[index - 1].isActive === false) {
          console.log("sharte dovom");
          return {
            ...step,
            isActive: false,
          };
        } else {
          console.log("sharte sevom");
          return { ...step, isActive: true };
        }
      });
    });
  };

  const handleBack = () => {
    setsteps((prevSteps) => {
      return prevSteps.map((step, index) => {
        if (
          (index < prevSteps.length - 1 &&
            prevSteps[index + 1].isActive === true) ||
          index == prevSteps.length - 1
        ) {
          return {
            ...step,
            isActive: true,
          };
        } else {
          return step;
        }
      });
    });
  };

  return (
    <div className={style.BulletComp}>
      {steps.map((steps) => (
        <div className={style.req_bull} key={steps.id}>
          <BulletLine
            // onClick={openModal}
            extraClass={
              steps.isActive === false
                ? style.bullet_line_secondClass
                : style.bulletline
            }
          />
          <p>{steps.title}</p>
        </div>
      ))}

    </div>
  );
}
