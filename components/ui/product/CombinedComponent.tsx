import { FilterAction } from "@/lib/constants";
import React from "react";
import { FaTh, FaList } from "react-icons/fa"; // Icons for grid and list views
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
interface CombinedComponentProps {
    dispatch: React.Dispatch<FilterAction>;
}

const CombinedComponent: React.FC<
    CombinedComponentProps
> = ({ dispatch }) => {
    return (
        <div className="relative flex justify-between items-center text-right flex-row mt-4 font-iransans">
            {/* Left side: View Toggle Buttons */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <button
                    className="p-1.5 bg-gray-200 rounded ml-2 hover:bg-gray-300"
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
                    className="p-1.5 bg-gray-200 rounded ml-2 hover:bg-gray-300"
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

            {/* Center: Product Display Text */}
            <div className="text-gray-700 font-bold text-xs md:text-md  mr-2">
                نمایش محصولات 1 تا 24 از 200 نتیجه
            </div>

            {/* Right side: Sorting Dropdown */}
            <div className="mr-2">
                <Select
                    dir="rtl"
                    defaultValue="lowest"
                >
                    <SelectTrigger className="flex w-[200px] font-iransans font-bold    border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
                        <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent
                        dir="ltr"
                        className="w-full"
                    >
                        {menuItems.map((item) => (
                            <SelectItem
                                key={item.value}
                                value={item.value}
                                className="font-iransans"
                            >
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CombinedComponent;
const menuItems = [
    { value: "special", label: "ویژه" },
    { value: "lowest", label: "پایین ترین قیمت ها" },
    { value: "highest", label: "بالاترین قیمت ها" },
];
