"use client";
import ProductList from "@/components/magicui/ProductList";
import Filter from "@/components/product/Filter";
import SearchBar from "@/components/product/SearchBar";
import FilterBar from "@/components/ui/product/FilterBar";
import PaginationAndViewToggle from "@/components/ui/product/PaginationAndViewToggle";
import ProductGrid from "@/components/ui/product/ProductGrid";
import { FilterAction, FilterState } from "@/lib/constants";
import { useReducer } from "react";

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
const Products: React.FC = () => {
    const [state, dispatch] = useReducer(
        filterReducer,
        initialState
    );

    return (
        <div className=" mx-auto p-4 font-iransans">
            <div className="flex justify-between items-center container  my-10 space-x-3">
                <PaginationAndViewToggle
                    dispatch={dispatch}
                />
                <FilterBar dispatch={dispatch} />
            </div>
            <div className="flex justify-center items-center">
                <Filter />
                <SearchBar />
            </div>
            <div className="flex flex-col"></div>
            <ProductGrid
                dispatch={dispatch}
                filter={state.filter}
            />
        </div>
    );
};

export default Products;
