import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { useSwiper } from "swiper/react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ImageSliderProps {
    images: { url: string; text: string }[];
    selectedImage: number;
    closeSlider: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    selectedImage,
    closeSlider,
}) => {
    const swiper = useSwiper();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-3/4 h-3/4">
                <Button
                    variant="destructive"
                    onClick={closeSlider}
                    className="absolute text-primary-foreground top-2 right-2 p-3 z-10"
                >
                    <X />
                </Button>
                <Swiper
                    initialSlide={selectedImage}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full overflow-hidden">
                                {/* Shutter left */}
                                <div
                                    className="absolute top-0 left-0 h-full w-1/2 bg-cover bg-center transition-transform duration-1000 ease-in-out transform -translate-x-full swiper-slide-active:transform-none"
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                ></div>
                                {/* Shutter right */}
                                <div
                                    className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center transition-transform duration-1000 ease-in-out transform translate-x-full swiper-slide-active:transform-none"
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                ></div>
                                {/* Full image */}
                                <img
                                    src={image.url}
                                    alt={`Slide ${
                                        index + 1
                                    }`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Text overlay */}
                                <div className="absolute bottom-4 left-0 w-full text-center text-white bg-black bg-opacity-50 p-2">
                                    <p>{image.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSlider;
