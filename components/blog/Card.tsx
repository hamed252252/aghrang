import React from "react";

interface CardProps {
    date: string;
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({
    date,
    title,
    description,
    imageSrc,
}) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-gray-800 text-xl font-semibold mb-2">
                {date}
            </h3>
            <h4 className="text-gray-600 text-lg">
                {title}
            </h4>
            <p className="text-gray-500 mt-2">
                {description}
            </p>
        </div>
    </div>
);

export default Card;
