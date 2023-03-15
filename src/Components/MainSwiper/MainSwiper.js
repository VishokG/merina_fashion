import React from 'react'
import "./MainSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MainSwiper = () => {
    return (
        <>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="swiper_1">
                <SwiperSlide className="swiper_slide_1"><img src="assets/main_swiper/man1.jpeg" alt=""/></SwiperSlide>
                <SwiperSlide className="swiper_slide_1"><img src="assets/main_swiper/woman1.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_1"><img src="assets/main_swiper/man2.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_1"><img src="assets/main_swiper/woman2.jpeg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default MainSwiper;