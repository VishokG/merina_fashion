import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./AltSwiper.css";

const AltSwiper = () => {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints= {
                    {
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }
                }
                pagination={{
                clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="swiper_3"
            >
                <SwiperSlide className="swiper_slide_3"><img src="assets/alt_swiper/glasses.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_3"><img src="assets/alt_swiper/jeans.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_3"><img src="assets/alt_swiper/purse.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_3"><img src="assets/alt_swiper/shirt.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide className="swiper_slide_3"><img src="assets/alt_swiper/shoes.jpeg" alt="" /></SwiperSlide>

            </Swiper>
        </>
    )
}

export default AltSwiper;