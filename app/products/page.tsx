"use client";
import React, { useReducer, useState } from "react";
import FilterBar from "@/components/ui/product/FilterBar";
import PaginationAndViewToggle from "@/components/ui/product/PaginationAndViewToggle";
import ProductGrid from "@/components/ui/product/ProductGrid";

export type FilterAction =
    | { type: "SET_GRID"; payload: string }
    | { type: "SET_LIST"; payload: string };

// تعریف نوع حالت
interface FilterState {
    filter: string;
}

// تعریف ریدوسر
function filterReducer(
    state: FilterState,
    action: FilterAction
): FilterState {
    switch (action.type) {
        case "SET_GRID":
            return { ...state, filter: action.payload };
        case "SET_LIST":
            return { ...state, filter: action.payload };
        default:
            throw new Error("Unknown action type");
    }
}

const initialState: FilterState = {
    filter: "grid-cols-4",
};
const Page: React.FC = () => {
    const [state, dispatch] = useReducer(
        filterReducer,
        initialState
    );

    return (
        <div className=" mx-auto p-4 font-iransans">
            <div className="flex justify-between items-center container  my-10 space-x-3">
                <FilterBar dispatch={dispatch} />
                <PaginationAndViewToggle
                    dispatch={dispatch}
                />
            </div>
            <ProductGrid
                dispatch={dispatch}
                filter={state.filter}
            />
        </div>
    );
};

export default Page;
