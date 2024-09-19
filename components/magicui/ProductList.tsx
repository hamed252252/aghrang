import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}

const ProductList: React.FC = () => {
    const products: Product[] = [
        {
            id: 1,
            name: "تی شرت زنانه",
            price: 100,
            image: "/path/to/image1.jpg",
            rating: 5,
        },
        {
            id: 2,
            name: "مد زیبایی رویایی",
            price: 150,
            image: "/path/to/image2.jpg",
            rating: 5,
        },
        // Add more products as needed
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border p-4 rounded-lg"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                    />
                    <h3 className="mt-2">{product.name}</h3>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">
                            {"★".repeat(product.rating)}
                        </span>
                        <span className="text-gray-400">
                            {"★".repeat(5 - product.rating)}
                        </span>
                    </div>
                    <p className="mt-2 font-bold">
                        ${product.price.toFixed(2)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
