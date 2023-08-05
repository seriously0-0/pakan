"use client";
import style from "./comments.module.css";
import Story from "./story";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Comments = () => {
  return (
    <div className={style.comment_section}>
      <div>
        <h2 className={style.headCustomers}>مشتریان ما چه میگویند</h2>
        <p className={style.customersComment}>نظرات مشتریان</p>
      </div>
      <div className={style.comments}>
        <div className={style.just_comment}>
          <Swiper
            modules={[ Navigation, Pagination, Scrollbar, A11y ]}
            spaceBetween={50}
            slidesPerView={2}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }} 
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Story className={style.commentDiv} />
            </SwiperSlide>
            <SwiperSlide>
              <Story className={style.commentDiv} />
            </SwiperSlide>
            <SwiperSlide>
              <Story className={style.commentDiv} />
            </SwiperSlide>
            <SwiperSlide>
              <Story className={style.commentDiv} />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;
