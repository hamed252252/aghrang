"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleUser } from "lucide-react";

// Default image and content for fallback
const defaultData = {
    imageUrl:
        "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg",
    author: "علی شمسی",
    time: "10 ساعت پیش",
    description:
        "شما می‌خواهید از لورم ایپسوم استفاده کنید، باید مطمئن شوید که هیچ چیز شرم‌آور در وسط متن پنهان نشده باشد.",
    likes: 2659,
    comments: 569,
};

const Gallery: React.FC = () => {
    const [data, setData] = useState(defaultData); // Initialize state with default values
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });

        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://example.com/api/gallery"
                ); // Replace with your API URL
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData({
                    imageUrl:
                        result.image ||
                        defaultData.imageUrl,
                    author:
                        result.author || defaultData.author,
                    time: result.time || defaultData.time,
                    description:
                        result.description ||
                        defaultData.description,
                    likes:
                        result.likes || defaultData.likes,
                    comments:
                        result.comments ||
                        defaultData.comments,
                });
            } catch (error: any) {
                setError(error.message);
                // No need to update data state, since it's already using default values
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="bg-white rounded-3xl shadow-2xl max-w-3xl font-iransans mx-auto p-8"
            data-aos="fade-up"
        >
            {error && (
                <div className="text-red-500 mb-4">
                    Error fetching data: {error}
                </div>
            )}

            <div className="flex items-center mb-8">
                <CircleUser className="w-16 h-16 text-gradient bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg mr-4" />
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                        {data.author}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {data.time}
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {data.description}
                </p>
                <div className="relative overflow-hidden rounded-3xl shadow-lg group">
                    <img
                        src={data.imageUrl}
                        alt="Post"
                        className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-105 duration-700 ease-out"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                        <h4 className="text-xl font-bold">
                            عنوان تصویر
                        </h4>
                        <p className="text-sm">
                            توضیح کوتاه درباره تصویر
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-gray-500 text-sm">
                <span className="flex items-center">
                    ❤️{" "}
                    <span className="ml-2">
                        {data.likes} پسند
                    </span>
                </span>
                <span className="flex items-center">
                    💬{" "}
                    <span className="ml-2">
                        {data.comments} نظرات
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Gallery;
