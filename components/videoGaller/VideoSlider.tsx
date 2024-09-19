import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Virtual,
} from "swiper/modules";
import "swiper/css/bundle";

import { X } from "lucide-react";
import { Button } from "../ui/button";

interface VideoSliderProps {
    videos: { url: string; text: string }[];
    selectedVideo: number;
    closeSlider: () => void;
}

const VideoSlider: React.FC<VideoSliderProps> = ({
    videos,
    selectedVideo,
    closeSlider,
}) => {
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
                    initialSlide={selectedVideo}
                    modules={[
                        Navigation,
                        Pagination,
                        Virtual,
                    ]}
                    navigation
                    pagination={{ clickable: true }}
                    virtual
                    className="w-full h-full"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide
                            key={index}
                            virtualIndex={index}
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <video
                                    controls
                                    preload="none"
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src={video.url}
                                        type="video/mp4"
                                    />
                                    Your browser does not
                                    support the video tag.
                                </video>
                                {/* Text overlay */}
                                <div className="absolute bottom-4 left-0 w-full text-center text-white bg-black bg-opacity-50 p-2">
                                    <p>{video.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default VideoSlider;
