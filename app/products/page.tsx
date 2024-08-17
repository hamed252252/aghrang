import FilterBar from "@/components/ui/product/FilterBar";
import ProductGrid from "@/components/ui/product/ProductGrid";
import React from "react";

function page() {
    return (
        <div className="container mx-auto p-4">
            <FilterBar />
            <ProductGrid />
        </div>
    );
}

export default page;
