"use client"
import style from "./trust.module.css";
import Image from "next/image";
import unNamed from "../../../public/img/unnamed.png";
import download2 from "../../../public/img/download2.png";
import design from "../../../public/img/design-vector-png-5.png";
import resize from "../../../public/img/0479bfbf54a9cdb35d8a51b824ee0fcc_resize.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Trust = () => {
  return (
    <div className={style.trust}>
      <div className={style.head_trust}>
        <h1>به ما اعتماد کرده‌اند</h1>
        <p>مشتریان سازمانی</p>
      </div>
      <div className={style.trustImages}>
        <div className={style.trust_sign}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={80}
            slidesPerView={5}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {" "}
              <Image src={unNamed} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={unNamed} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={download2} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={design} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={resize} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={unNamed} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={unNamed} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={download2} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={design} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={resize} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trust;
