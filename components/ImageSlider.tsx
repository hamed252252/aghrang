import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";

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
    // Memoize the Swiper slides to prevent unnecessary re-renders
    const renderedSlides = useMemo(
        () =>
            images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full overflow-hidden">
                        {/* Full image */}
                        <Image
                            src={image.url}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full object-cover"
                            priority={
                                index === selectedImage
                            } // Set priority for the initially selected image
                        />

                        {/* Text overlay */}
                        <div className="absolute bottom-4 left-0 w-full text-center text-white bg-black bg-opacity-50 p-2">
                            <p>{image.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )),
        [images, selectedImage]
    );

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
                    {renderedSlides}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSlider;
