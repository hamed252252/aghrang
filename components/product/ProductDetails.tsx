"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Separator } from "@/components/ui/separator";

interface ProductDetailsProps {
    name: string;
    price: string;
    originalPrice: string;
    description: string;
    brand: string;
    availability: string;
    seller: string;
    material: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    name,
    price,
    originalPrice,
    description,
    brand,
    availability,
    seller,
    material,
}) => {
    useEffect(() => {
        gsap.from(".price", {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }, []);

    return (
        <div className="w-3/4 p-4 ">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className=" text-red-500 text-lg">
                ${price}
                <span className="line-through text-gray-500">
                    ${originalPrice}
                </span>
            </div>
            <Separator className="my-3" />
            <p className="my-4">{description}</p>
            <Separator className="my2" />
            <div className="my-4">
                <strong>برند:</strong> {brand} <br />
                <strong>در دسترس بودن:</strong>{" "}
                {availability} <br />
                <strong>فروشنده:</strong> {seller} <br />
                <strong>پارچه:</strong> {material}
            </div>
            <button className="bg-blue-500 text-white  mt-2 py-2 px-4 rounded">
                اکنون بخرید
            </button>
        </div>
    );
};

export default ProductDetails;
