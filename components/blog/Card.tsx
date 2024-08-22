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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out opacity-0 animate-fadeIn">
        <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
        />
        <div className="p-6">
            <h3 className="text-gray-700 text-lg font-semibold mb-1">
                {date}
            </h3>
            <h4 className="text-gray-900 text-xl font-bold mb-2">
                {title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export default Card;
