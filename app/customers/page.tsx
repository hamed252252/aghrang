"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleUserRound } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1496440737103-35d4cd9c14d1",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
];

const Gallery: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md max-w-2xl font-iransans mx-auto p-6">
            <div className="flex items-center mb-4">
                <CircleUserRound className="size-16" />
                <div>
                    <h3 className="text-lg font-semibold">
                        علی شمسی
                    </h3>
                    <p className="text-sm text-gray-500">
                        10 Hours ago
                    </p>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-gray-700 mb-4">
                    شما می‌خواهید از لورم ایپسوم استفاده
                    کنید، باید مطمئن شوید که هیچ چیز شرم‌آور
                    در وسط متن پنهان نشده باشد. همه
                    تزاریازورهای لورم ایپسوم در اینترنت
                    تمایل دارند تا قطعات از پیش تعریف شده را
                    در صورت لزوم تکرار کنند و این اولین مولد
                    واقعی در اینترنت است.
                </p>
                <img
                    src="https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_640.jpg"
                    alt="Post"
                    className="w-full rounded-lg"
                />
            </div>

            {/* <div className="flex justify-between text-gray-500 text-sm">
                <span className="flex items-center">
                    ❤️ <span className="ml-1">2659</span>
                </span>
                <span className="flex items-center">
                    💬{" "}
                    <span className="ml-1">569 نظرات</span>
                </span>
            </div> */}
        </div>
    );
};

export default Gallery;
