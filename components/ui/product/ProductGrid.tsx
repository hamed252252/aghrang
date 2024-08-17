// components/ProductGrid.tsx
import ProductCard from "@/components/ui/product/ProductCard";
import React from "react";

const ProductGrid: React.FC = () => {
    const products = [
        {
            image: "/images/product1.jpg",
            title: "ست لباس",
            description: "ست شیک لباس دو تکه زنانه",
            originalPrice: "350.00",
            discountedPrice: "30.00",
            discount: "50%",
        },
        {
            image: "/images/product2.jpg",
            title: "کت",
            description: "کت جین مردانه",
            originalPrice: "400.00",
            discountedPrice: "25.00",
            onSale: true,
        },
        {
            image: "/images/product3.jpg",
            title: "مد زیبایی رویایی",
            description: "تاپ های شیک زنانه",
            originalPrice: "360.00",
            discountedPrice: "30.00",
            onSale: true,
        },
        {
            image: "/images/product4.jpg",
            title: "تی شرت زنانه",
            description: "سویشرت زنانه با چاپ آستین کامل",
            originalPrice: "350.00",
            discountedPrice: "26.00",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
