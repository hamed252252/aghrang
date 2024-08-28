import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";

const Filter: React.FC = () => {
    return (
        <div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Sheet component for Filter */}
            <Sheet>
                {/* SheetTrigger should not have a button inside; use it directly */}
                <SheetTrigger asChild>
                    <div className="mb-4 flex flex-row justify-between items-center font-iransans py-2 px-4 bg-blue-500 text-white rounded cursor-pointer">
                        فیلتر
                        <ChevronDown />
                    </div>
                </SheetTrigger>
                <SheetContent
                    dir="rtl"
                    className="font-iransans w-full max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-xl"
                >
                    <SheetHeader>
                        <SheetTitle
                            dir="rtl"
                            className="text-right mt-6"
                        >
                            فیلتر
                        </SheetTitle>
                        <SheetDescription
                            dir="rtl"
                            className="text-right mt-6"
                        >
                            تنظیمات فیلتر خود را از
                            گزینه‌های زیر انتخاب کنید.
                        </SheetDescription>
                    </SheetHeader>

                    {/* Category Section */}
                    <div className="mt-4">
                        <h4 className="mb-1">دسته بندی</h4>
                        {[
                            "پیراهن مردانه",
                            "شلوار جین مردانه",
                            "پیرزن زنان",
                            "شلوار جین زنانه",
                            "تی شرت مردانه",
                        ].map((category) => (
                            <div
                                key={category}
                                className="flex items-center mb-2"
                            >
                                <input
                                    type="radio"
                                    id={category}
                                    name="category"
                                    className="mr-2"
                                />
                                <label htmlFor={category}>
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Brand Section */}
                    <div className="mt-4">
                        <h4 className="mb-1">برند</h4>
                        {[
                            "Levi's",
                            "دیزل",
                            "لی",
                            "هاسوسن",
                            "Denizen",
                            "Spykar",
                        ].map((brand) => (
                            <div
                                key={brand}
                                className="flex items-center mb-2"
                            >
                                <input
                                    type="checkbox"
                                    id={brand}
                                    className="mr-2"
                                />
                                <label htmlFor={brand}>
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Color Section */}
                    <div className="mt-4">
                        <h4 className="mb-1">رنگ‌ها</h4>
                        <div className="flex flex-wrap space-x-2">
                            {[
                                "red",
                                "pink",
                                "green",
                                "yellow",
                                "blue",
                                "black",
                                "white",
                            ].map((color) => (
                                <span
                                    key={color}
                                    className={`w-6 h-6 rounded-full border bg-${color}-500`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Price Range Section */}
                    <div className="mt-4">
                        <h4 className="mb-1">قیمت</h4>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm sm:text-base">
                            <span>$0</span>
                            <span>$200</span>
                            <span>$800</span>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Filter;
