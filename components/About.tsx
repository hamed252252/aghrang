"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const missionCardRef = useRef<HTMLDivElement>(null);
    const visionCardRef = useRef<HTMLDivElement>(null);
    const valuesCardRef = useRef<HTMLDivElement>(null);
    const storyCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Header animation
        gsap.fromTo(
            headerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Paragraph animation
        gsap.fromTo(
            paragraphRef.current,
            { x: "100%", opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "easeOut",
            }
        );

        // Cards animation
        const cardRefs = [
            missionCardRef.current,
            visionCardRef.current,
            valuesCardRef.current,
            storyCardRef.current,
        ];

        gsap.fromTo(
            cardRefs.filter(Boolean), // Filter out any null values
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
            }
        );

        // Hover effect for cards
        cardRefs.forEach((card) => {
            card?.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.05 });
            });
            card?.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1 });
            });
        });
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-r font-iransans from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center py-12"
            dir="rtl"
        >
            <div className="max-w-4xl w-full px-6 text-center">
                <h1
                    ref={headerRef}
                    className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg"
                >
                    درباره ما
                </h1>
                <p
                    ref={paragraphRef}
                    className="mt-6 text-lg text-gray-200 leading-relaxed drop-shadow-md"
                >
                    ما یک تیم پرشور از حرفه‌ای‌ها هستیم که
                    به ارائه خدمات عالی و راه‌حل‌های
                    نوآورانه اختصاص داریم. تعهد ما به برتری،
                    ما را به مرزهای جدید می‌برد و در هر کاری
                    که انجام می‌دهیم، برای مشتریانمان ارزش
                    ایجاد می‌کنیم.
                </p>
            </div>

            <div className="mt-12 max-w-4xl w-full flex flex-col md:flex-row gap-6">
                <div
                    ref={missionCardRef}
                    className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1"
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        ماموریت ما
                    </h2>
                    <p className="mt-4 text-gray-600">
                        ماموریت ما توانمندسازی کسب‌وکارها و
                        افراد از طریق ارائه راه‌حل‌های عالی
                        است که موفقیت و رشد را هدایت می‌کند.
                        ما هدف داریم تا در هر صنعتی که
                        فعالیت می‌کنیم، شریک مورد انتخاب
                        باشیم.
                    </p>
                </div>

                <div
                    ref={visionCardRef}
                    className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1"
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        چشم‌انداز ما
                    </h2>
                    <p className="mt-4 text-gray-600">
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
                <div
                    ref={valuesCardRef}
                    className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1"
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        ارزش‌های ما
                    </h2>
                    <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
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

                <div
                    ref={storyCardRef}
                    className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1"
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        داستان ما
                    </h2>
                    <p className="mt-4 text-gray-600">
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

export default About;
