import FilterBar from "@/components/ui/product/FilterBar";
import PaginationAndViewToggle from "@/components/ui/product/PaginationAndViewToggle";
import ProductGrid from "@/components/ui/product/ProductGrid";
import React from "react";

function page() {
    return (
        <div className="container mx-auto p-4 font-iransans">
            <div className="flex justify-between items-center my-10 space-x-3">
                <FilterBar />

                <PaginationAndViewToggle />
            </div>
            <ProductGrid />
        </div>
    );
}

export default page;
