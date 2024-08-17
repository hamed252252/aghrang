"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper/modules";

import image1 from "@/public/assets/slider/1.svg";
import image2 from "@/public/assets/slider/2.svg";
import image3 from "@/public/assets/slider/3.svg";
import image4 from "@/public/assets/slider/4.svg";

const Slider = () => {
    return (
        <div className="md:block hidden w-full h-[70vh] ">
            <Swiper
                cssMode={true}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                ]}
                className="w-full h-full"
            >
                <div
                    style={{
                        backgroundImage: 'url("/mask.svg")',
                    }}
                >
                    {[image1, image2, image3, image4].map(
                        (image, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center items-center"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={image}
                                        alt={`Slide ${
                                            index + 1
                                        }`}
                                        layout="fill"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
