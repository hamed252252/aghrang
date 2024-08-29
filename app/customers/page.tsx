"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleUser } from "lucide-react";
import useFetchData from "./useFetchData"; // Import custom hook
import defaultImage from "@/public/images/girl.avif";
// Default image and content for fallback
const defaultData = {
    imageUrl: defaultImage.src,
    author: "علی شمسی",
    time: "10 ساعت پیش",
    description:
        "شما می‌خواهید از لورم ایپسوم استفاده کنید، باید مطمئن شوید که هیچ چیز شرم‌آور در وسط متن پنهان نشده باشد.",
    likes: 2659,
    comments: 569,
};

const Gallery: React.FC = () => {
    const { data, loading, error, retry } = useFetchData(
        "https://example.com/api/gallery",
        defaultData
    );

    // Memoize AOS initialization to prevent re-runs
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div
            className="bg-white rounded-3xl shadow-2xl max-w-3xl font-iransans mx-auto p-8"
            data-aos="fade-up"
            aria-live="polite"
        >
            {loading ? (
                <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </div>
                    </div>
                    <div className="h-60 bg-gray-300 rounded-3xl"></div>
                </div>
            ) : (
                <>
                    {error && (
                        <div className="text-red-500 mb-4">
                            {error}
                            <button
                                onClick={retry}
                                className="ml-2 text-blue-500 underline"
                            >
                                Try Again
                            </button>
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
                            <Image
                                src={data.imageUrl}
                                alt="Post"
                                width={626}
                                height={417}
                                loading="lazy"
                                quality={75}
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
                </>
            )}
        </div>
    );
};

export default Gallery;
