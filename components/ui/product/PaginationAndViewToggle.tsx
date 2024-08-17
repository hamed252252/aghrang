import React from "react";
import { FaTh, FaList } from "react-icons/fa"; // Icons for grid and list views

const PaginationAndViewToggle: React.FC = () => {
    return (
        <div className="flex justify-between gap-x-3 items-center mt-4">
            <div className="text-gray-700">
                نمایش محصولات 1 تا 24 از 200 نتیجه
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex space-x-1 rtl:space-x-reverse">
                    {/* Pagination indicators - adjust colors and sizes as needed */}
                    <span className="w-2 h-6 bg-indigo-600 "></span>
                    <span className="w-2 h-6 bg-indigo-600 "></span>
                    <span className="w-2 h-6 bg-indigo-600 "></span>
                    <span className="w-2 h-6 bg-gray-300 "></span>
                    <span className="w-2 h-6 bg-gray-300 "></span>
                </div>
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <FaList />
                    </button>
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <FaTh />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationAndViewToggle;
