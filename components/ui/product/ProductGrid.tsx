// components/ProductGrid.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { FilterAction } from "@/app/products/page";
interface ProductGridProps {
    filter: string;
    dispatch: React.Dispatch<FilterAction>;
}
const ProductGrid: React.FC<ProductGridProps> = ({
    filter,
    dispatch,
}) => {
    const products = [
        {
            image: "https://via.placeholder.com/300x400.png?text=Product+1",
            title: "ست لباس",
            description: "ست شیک لباس دو تکه زنانه",
            originalPrice: "350.00",
            discountedPrice: "30.00",
            discount: "50%",
        },
        {
            image: "https://via.placeholder.com/300x400.png?text=Product+2",
            title: "کت",
            description: "کت جین مردانه",
            originalPrice: "400.00",
            discountedPrice: "25.00",
            onSale: true,
        },
        {
            image: "https://via.placeholder.com/300x400.png?text=Product+3",
            title: "مد زیبایی رویایی",
            description: "تاپ های شیک زنانه",
            originalPrice: "360.00",
            discountedPrice: "30.00",
            onSale: true,
        },
        {
            image: "https://via.placeholder.com/300x400.png?text=Product+4",
            title: "تی شرت زنانه",
            description: "سویشرت زنانه با چاپ آستین کامل",
            originalPrice: "350.00",
            discountedPrice: "26.00",
        },
    ];

    return (
        <div className={cn("grid gap-4 w-full ", filter)}>
            {products.map((product, index) => (
                <ProductCard
                    filter={filter}
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
