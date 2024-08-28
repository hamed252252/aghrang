import { FilterAction } from "@/lib/constants";
import React from "react";
import { FaTh, FaList } from "react-icons/fa"; // Icons for grid and list views
interface PaginationAndViewToggleProps {
    dispatch: React.Dispatch<FilterAction>;
}
const PaginationAndViewToggle: React.FC<
    PaginationAndViewToggleProps
> = ({ dispatch }) => {
    return (
        <div className="flex justify-center   gap-x-3 items-center  mt-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse ">
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <button
                        className="p-2 bg-gray-200 rounded  hover:bg-gray-300 "
                        onClick={() =>
                            dispatch({
                                type: "SET_LIST",
                                payload: "grid-rows-1",
                            })
                        }
                    >
                        <FaList />
                    </button>
                    <button
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                            dispatch({
                                type: "SET_GRID",
                                payload: "grid-cols-4",
                            })
                        }
                    >
                        <FaTh />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationAndViewToggle;
