import React from "react";

interface CourseSection {
    title: string;
    description: string;
    gradient: string;
    icon?: JSX.Element; // Optional icon prop
}

interface CourseRankTemplateProps {
    mainTitle: string;
    searchPlaceholder: string;
    sections?: CourseSection[]; // Make sections optional
}

const CourseRankTemplateRTL: React.FC<
    CourseRankTemplateProps
> = ({
    mainTitle,
    searchPlaceholder,
    sections = [], // Default to an empty array if sections is not provided
}) => {
    return (
        <div
            dir="rtl"
            className="bg-gray-100 py-10 font-iransans"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">
                        {mainTitle}
                    </h1>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="py-2 px-4 border border-gray-300 rounded-md"
                        />
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-md">
                            جستجو
                        </button>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    در تاریخ ستاره‌شناسی مدرن، احتمالاً هیچ
                    جهش بزرگتری از ساخت و پرتاب تلسکوپ فضایی
                    هابل نبوده است.
                </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg text-white ${section.gradient} w-full sm:w-80`}
                    >
                        {section.icon && (
                            <div className="mb-2">
                                {section.icon}
                            </div>
                        )}
                        <h2 className="text-2xl font-semibold">
                            {section.title}
                        </h2>
                        <p className="mt-2">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseRankTemplateRTL;
