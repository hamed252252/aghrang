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
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                />
                {discount && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                        {discount}
                    </span>
                )}
                {onSale && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                        Sale
                    </span>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>
                <p className="text-sm text-gray-500">
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
