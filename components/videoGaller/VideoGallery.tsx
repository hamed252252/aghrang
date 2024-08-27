"use client";
// VideoGallery.tsx
import React, { useState } from "react";
import VideoSlider from "./VideoSlider";

const videos = [
    {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        text: "این متن برای ویدیو اول است.",
    },
    {
        url: "https://www.w3schools.com/html/movie.mp4",
        text: "این متن برای ویدیو دوم است.",
    },
    {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        text: "این متن برای ویدیو سوم است.",
    },
    // add more videos
];

const VideoGallery: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<
        number | null
    >(null);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 font-iransans my-10">
            {videos.map((video, index) => (
                <div
                    key={index}
                    className="cursor-pointer rounded-md p-3"
                    onClick={() => setSelectedVideo(index)}
                >
                    <div className="border rounded-md p-2">
                        <video
                            src={video.url}
                            className="w-full h-[45vh] object-cover rounded-md"
                            muted
                        />
                        <div className="mt-2">
                            <h1 className="text-center text-xl text-black">
                                عنوان ویدیوها
                            </h1>
                            <p className="text-center font-semibold text-gray-500">
                                {video.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {selectedVideo !== null && (
                <VideoSlider
                    videos={videos}
                    selectedVideo={selectedVideo}
                    closeSlider={() =>
                        setSelectedVideo(null)
                    }
                />
            )}
        </div>
    );
};

export default VideoGallery;
