"use client";
import React, { useState } from "react";
import FilterBar from "@/components/ui/product/FilterBar";
import PaginationAndViewToggle from "@/components/ui/product/PaginationAndViewToggle";
import ProductGrid from "@/components/ui/product/ProductGrid";

const Page: React.FC = () => {
    const [filter, setFilter] =
        useState<string>("grid-cols-4");

    return (
        <div className="container mx-auto p-4 font-iransans">
            <div className="flex justify-between items-center my-10 space-x-3">
                <FilterBar setfilter={setFilter} />
                <PaginationAndViewToggle
                    setFilter={setFilter}
                />
            </div>
            <ProductGrid
                setfilter={setFilter}
                filter={filter}
            />
        </div>
    );
};

export default Page;
