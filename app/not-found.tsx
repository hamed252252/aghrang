// File: pages/404.tsx

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Head from "next/head";
import notFoundimage from "@/public/notFound.jpg";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "صحفه ی مورد نظر یدا نشد",
    description: "Agh Rang Company",
};
export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement | any>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (
            containerRef.current &&
            svgRef.current &&
            textRef.current &&
            buttonRef.current
        ) {
            const tl = gsap.timeline();
            tl.fromTo(
                containerRef.current,
                {
                    opacity: 0,
                    y: -50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }
            )
                .fromTo(
                    svgRef.current,
                    {
                        opacity: 0,
                        scale: 0.5,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "back.out(1.7)",
                    },
                    "-=0.5"
                )
                .fromTo(
                    textRef.current,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    },
                    "-=0.5"
                )
                .fromTo(
                    buttonRef.current,
                    {
                        opacity: 0,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=0.5"
                );
        }
    }, []);

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>صفحه پیدا نشد | وب سایت شما</title>
                <meta
                    name="description"
                    content="متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. ممکن است حذف شده باشد یا به آدرس دیگری منتقل شده باشد."
                />
            </Head>

            <main
                ref={containerRef}
                className="font-iransans flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 text-center p-6"
            >
                <div className="max-w-lg mx-auto p-10 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                    <div className="w-full h-96 relative mt-10">
                        <Image
                            alt="صفحه پیدا نشد"
                            fill
                            src={notFoundimage.src}
                            ref={svgRef}
                        />
                    </div>
                    <h1
                        ref={textRef}
                        className="text-5xl font-bold text-gray-800 mb-4"
                    >
                        صفحه پیدا نشد
                    </h1>
                    <p className="text-gray-600 mb-8">
                        متأسفانه صفحه‌ای که به دنبال آن
                        هستید وجود ندارد. ممکن است حذف شده
                        باشد یا به آدرس دیگری منتقل شده
                        باشد.
                    </p>
                    <Link
                        ref={buttonRef}
                        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        href="/"
                    >
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </main>
        </>
    );
}
