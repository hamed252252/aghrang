// /components/SearchBar.tsx

import { Search } from "lucide-react";
import React from "react";

const SearchBar: React.FC = () => {
    return (
        <div
            dir="rtl"
            className="flex items-center text-left shadow-sm border-2 rounded-sm  flex-1 h-14  mx-auto"
        >
            {/* Input field with larger text and padding */}
            <input
                type="text"
                placeholder="جستجو..."
                className="flex-grow px-4 py-3 text-lg focus:outline-none"
            />
            {/* Larger Magnifying glass icon */}
            <Search className="w-6 h-6 ml-2 text-gray-600" />
        </div>
    );
};

export default SearchBar;
