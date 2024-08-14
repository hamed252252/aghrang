import React from "react";

const images = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3",
    "https://via.placeholder.com/300?text=Image+4",
    "https://via.placeholder.com/300?text=Image+5",
    "https://via.placeholder.com/300?text=Image+6",
];

const Gallery: React.FC = () => (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
            Image Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg"
                >
                    <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-64 object-cover transform transition duration-500 hover:scale-105"
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Gallery;
