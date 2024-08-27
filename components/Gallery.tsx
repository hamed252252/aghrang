"use client";
// Step 3: Gallery.tsx
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const images = [
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+1",
        text: "این متن برای تصویر اول است.",
    },
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+2",
        text: "این متن برای تصویر دوم است.",
    },
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+3",
        text: "این متن برای تصویر سوم است.",
    },
    // add more images
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<
        number | null
    >(null);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 font-iransans my-10">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="cursor-pointer rounded-md p-3"
                    onClick={() => setSelectedImage(index)}
                >
                    <div className="border rounded-md p-2">
                        <img
                            src={image.url}
                            alt={`Gallery image ${
                                index + 1
                            }`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <div className="mt-2">
                            <h1 className="text-center text-xl text-black">
                                عنوان نمونه کارها
                            </h1>
                            <p className="text-center font-semibold text-gray-500">
                                {image.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {selectedImage !== null && (
                <ImageSlider
                    images={images}
                    selectedImage={selectedImage}
                    closeSlider={() =>
                        setSelectedImage(null)
                    }
                />
            )}
        </div>
    );
};

export default Gallery;
