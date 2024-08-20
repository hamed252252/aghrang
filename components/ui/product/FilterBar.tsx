import { FilterAction } from "@/app/products/page";
import React from "react";
interface FilterBarProps {
    dispatch: React.Dispatch<FilterAction>;
}
const FilterBar: React.FC<FilterBarProps> = ({
    dispatch,
}) => {
    return (
        <div className="relative inline-block text-right">
            <select className="block w-full mt-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>ویژه</option>
                <option>پایین ترین قیمت ها</option>
                <option>بالاترین قیمت ها</option>
            </select>
        </div>
    );
};

export default FilterBar;
