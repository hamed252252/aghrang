import React from "react";

const About: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r font-iransans from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center py-12"
            dir="rtl"
        >
            <div className="max-w-4xl w-full px-6 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                    درباره ما
                </h1>
                <p className="mt-6 text-lg text-gray-200 leading-relaxed drop-shadow-md">
                    ما یک تیم پرشور از حرفه‌ای‌ها هستیم که
                    به ارائه خدمات عالی و راه‌حل‌های
                    نوآورانه اختصاص داریم. تعهد ما به برتری،
                    ما را به مرزهای جدید می‌برد و در هر کاری
                    که انجام می‌دهیم، برای مشتریانمان ارزش
                    ایجاد می‌کنیم.
                </p>
            </div>

            <div className="mt-12 max-w-4xl w-full flex flex-col md:flex-row gap-6">
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
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

                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
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
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
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

                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
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
