import React from "react";
import { Eye, ShoppingCart, Scale } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    originalPrice: string;
    discountedPrice: string;
    onSale?: boolean;
    filter: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    onSale,
    filter,
}) => {
    const renderOverlayIcons = () => (
        <div className="absolute inset-0 flex justify-center items-center gap-x-4 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 ease-in-out duration-300 transition-opacity">
            <div className="bg-white p-2 md:p-3 xl:p-4 rounded-full shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300">
                <Scale className="w-2 h-2 md:w-4 md:h-4 xl:w-6 xl:h-6 text-gray-800" />
            </div>
            <div className="bg-white p-2 md:p-3 xl:p-4 rounded-full shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300">
                <Eye className="w-2 h-2 md:w-4 md:h-4 xl:w-6 xl:h-6 text-gray-800" />
            </div>
            <div className="bg-white p-2 md:p-3 xl:p-4 rounded-full shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300">
                <ShoppingCart className="w-2 h-2 md:w-4 md:h-4 xl:w-6 xl:h-6 text-gray-800" />
            </div>
        </div>
    );

    return filter === "grid-rows-1" ? (
        <div
            dir="rtl"
            className="flex items-center bg-white shadow-lg rounded-lg w-[100vw] h-[45vh] mx-auto my-4 relative overflow-hidden"
        >
            <div className="flex-shrink-0 w-1/3 h-full relative">
                <img
                    src={image}
                    alt={title}
                    className="h-[50vw] w-full object-cover rounded-r-lg"
                />
                {renderOverlayIcons()}
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
    ) : (
        <div className="  rounded-lg overflow-hidden  mx-auto shadow-lg bg-white my-4 relative">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className=" w-[70vw] md:w-[45vw] xl:w-[22vw]  h-[62vh] object-cover"
                />
                {renderOverlayIcons()}
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
