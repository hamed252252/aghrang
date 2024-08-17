// components/ProductCard.tsx
import React from "react";

type ProductCardProps = {
    image: string;
    title: string;
    description: string;
    originalPrice: string;
    discountedPrice: string;
    discount?: string;
    onSale?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    discount,
    onSale,
}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-2">
            <div className="relative group transform transition-transform duration-500 hover:rotate-1 hover:translate-y-1">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 group-hover:bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-10">
                    <span className="bg-white text-black px-4 py-2 text-sm rounded-lg shadow-lg">
                        View Details
                    </span>
                </div>
                {discount && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded-lg shadow-lg">
                        {discount}
                    </span>
                )}
                {onSale && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-lg shadow-lg">
                        Sale
                    </span>
                )}
            </div>
            <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-500 line-through mr-2">
                        ${originalPrice}
                    </span>
                    <span className="text-indigo-600 font-bold">
                        ${discountedPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
