"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            // Header animation
            timeline.from(".about-header", {
                opacity: 0,
                duration: 1.5,
            });

            // Paragraph animation
            timeline.from(
                ".about-paragraph",
                {
                    x: "100%",
                    opacity: 0,
                    duration: 1.5,
                    ease: "easeOut",
                },
                "-=1.2"
            ); // Overlap with header animation

            // Cards animation
            timeline.from(
                ".about-card",
                {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power1.out",
                },
                "-=1"
            ); // Slight overlap with paragraph animation
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gradient-to-r font-iransans from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center py-12"
            dir="rtl"
        >
            <div className="max-w-4xl w-full px-6 text-center">
                <h1 className="about-header text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                    درباره ما
                </h1>
                <p className="about-paragraph mt-6 text-lg text-gray-200 leading-relaxed drop-shadow-md">
                    ما یک تیم پرشور از حرفه‌ای‌ها هستیم که
                    به ارائه خدمات عالی و راه‌حل‌های
                    نوآورانه اختصاص داریم. تعهد ما به برتری،
                    ما را به مرزهای جدید می‌برد و در هر کاری
                    که انجام می‌دهیم، برای مشتریانمان ارزش
                    ایجاد می‌کنیم.
                </p>
            </div>

            <div className="mt-12 max-w-4xl w-full flex flex-col md:flex-row gap-6">
                <div className="about-card bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-gray-800/70">
                        ماموریت ما
                    </h2>
                    <p className="mt-4 text-black">
                        ماموریت ما توانمندسازی کسب‌وکارها و
                        افراد از طریق ارائه راه‌حل‌های عالی
                        است که موفقیت و رشد را هدایت می‌کند.
                        ما هدف داریم تا در هر صنعتی که
                        فعالیت می‌کنیم، شریک مورد انتخاب
                        باشیم.
                    </p>
                </div>

                <div className="about-card bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-gray-800/70">
                        چشم‌انداز ما
                    </h2>
                    <p className="mt-4 text-black">
                        چشم‌انداز ما این است که به یک رهبر
                        جهانی در حوزه خود تبدیل شویم، به
                        خاطر نوآوری، کیفیت و رضایت مشتری
                        شناخته شویم. ما تلاش می‌کنیم که از
                        طریق کارمان تأثیر مثبتی بر جهان
                        بگذاریم.
                    </p>
                </div>
            </div>

            <div className="mt-12 max-w-4xl w-full flex flex-col md:flex-row gap-6">
                <div className="about-card bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-gray-800/70">
                        ارزش‌های ما
                    </h2>
                    <ul className="mt-4 list-disc list-inside text-black space-y-2">
                        <li>
                            صداقت: ما به بالاترین
                            استانداردهای اخلاقی پایبندیم.
                        </li>
                        <li>
                            نوآوری: ما خلاقیت و تغییر را
                            می‌پذیریم.
                        </li>
                        <li>
                            برتری: ما در همه کارهایی که
                            انجام می‌دهیم، به دنبال کیفیت
                            هستیم.
                        </li>
                        <li>
                            کار تیمی: ما به قدرت همکاری
                            اعتقاد داریم.
                        </li>
                        <li>
                            مشتری‌مداری: مشتریان ما در قلب
                            کسب‌وکار ما قرار دارند.
                        </li>
                    </ul>
                </div>

                <div className="about-card bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-gray-800/70">
                        داستان ما
                    </h2>
                    <p className="mt-4 text-black">
                        شرکت ما در سال ۲۰۲۰ تأسیس شد و از یک
                        تیم کوچک با رویای بزرگ شروع شد.
                        امروز ما به یک کسب‌وکار پر رونق با
                        حضور جهانی تبدیل شده‌ایم، به لطف
                        تعهد بی‌پایان ما و اعتماد
                        مشتریانمان.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(About);
