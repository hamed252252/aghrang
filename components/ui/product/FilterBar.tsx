// components/FilterBar.tsx
import React from "react";

const FilterBar: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <input
                type="text"
                placeholder="جستجو.."
                className="px-4 py-2 border rounded-md w-full max-w-xs"
            />
            <div className="flex space-x-2 rtl:space-x-reverse">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                    فیلتر
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                    <i className="fas fa-th-large"></i>
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                    <i className="fas fa-th-list"></i>
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
