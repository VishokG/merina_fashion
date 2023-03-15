import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSwiper.css"
import ProductCard from '../ProductCard/ProductCard';

const ProductSwiper = (props) => {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                breakpoints= {
                    {
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 50
                        }
                    }
                }
                pagination={{
                clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="swiper_2"
            >
                {props.assets.map(a => <SwiperSlide className="swiper_slide_2"><ProductCard loc={a.url} name={a.name} type={a.type} price={a.price} discount={a.discount}/></SwiperSlide>)}
            </Swiper>
        </>
    )
}

export default ProductSwiper;