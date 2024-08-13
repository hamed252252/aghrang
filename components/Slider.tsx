"use client";
import Image from "next/image";
import image1 from "@/public/assets/slider/1.svg";
import image2 from "@/public/assets/slider/2.svg";
import image3 from "@/public/assets/slider/3.svg";
import image4 from "@/public/assets/slider/4.svg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mask from "@/public/mask.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import vector from "@/public/assets/slider/Vector 1.svg";
// import required modules
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
    return (
        <div className="hidden md:block ">
            <Swiper
                cssMode={true}
                loop
                navigation={true}
                style={{ backgroundImage: vector.src }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                ]}
                className="mySwiper bg-mask  "
            >
                <SwiperSlide>
                    <Image
                        src={image1}
                        alt="image1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={image2}
                        alt="image2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={image3}
                        alt="image3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={image4}
                        alt="image4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
