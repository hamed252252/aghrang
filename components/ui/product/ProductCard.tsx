import React from "react";
import { Eye, ShoppingCart, Scale } from "lucide-react";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    originalPrice: string;
    discountedPrice: string;
    onSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    onSale,
}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center gap-x-4 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 ease-in duration-500 transition-opacity">
                    <div className="bg-white p-3 rounded-full shadow-md hover:bg-slate-400 transition-all ease-in duration-300">
                        <Scale className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-md hover:bg-slate-400 transition-all ease-in duration-300">
                        <Eye className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-md hover:bg-slate-400 transition-all ease-in duration-300">
                        <ShoppingCart className="w-6 h-6 text-gray-800" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-400 line-through mr-2">
                        {originalPrice}
                    </span>
                    <span className="text-indigo-600 font-bold">
                        {discountedPrice}
                    </span>
                </div>
                {onSale && (
                    <span className="text-green-500 font-bold">
                        On Sale!
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
