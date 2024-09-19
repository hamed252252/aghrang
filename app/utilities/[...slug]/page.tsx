import Footer from "@/components/product/Footer";
import Header from "@/components/product/Header";
import ProductDetails from "@/components/product/ProductDetails";
import Sidebar from "@/components/product/Sidebar";
import CarouselCustomIndicator from "@/components/product/CarouselMP";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGoogle,
} from "react-icons/fa";

export default function Page() {
    const imagePaths = [
        "/images/10.png",
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
    ];

    const colors = [
        { id: "red", className: "bg-red-500" },
        { id: "blue", className: "bg-blue-500" },
        { id: "green", className: "bg-green-500" },
        { id: "yellow", className: "bg-yellow-500" },
    ];

    const socialPlatforms = [
        {
            name: "Facebook",
            icon: <FaFacebook className="w-10 h-5" />,
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="w-10 h-5" />,
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="w-10 h-5" />,
        },
        {
            name: "Google",
            icon: <FaGoogle className="w-10 h-5" />,
        },
    ];

    return (
        <div
            dir="rtl"
            className="min-h-screen flex flex-col items-center font-iransans"
        >
            {/* Header */}
            <div className="w-full">
                <Header title="صفحه محصول" />
            </div>

            {/* Breadcrumb */}
            <div className="w-full flex justify-start p-4">
                <span className="text-sm text-gray-500">
                    تجارت الکترونیک / صفحه محصول
                </span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row w-full lg:w-11/12 p-4">
                {/* Sidebar */}
                <div className="w-full lg:w-3/4 flex flex-col lg:flex-row">
                    {/* Image Carousel */}
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="flex justify-center mt-4">
                            <CarouselCustomIndicator
                                imagePaths={imagePaths}
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-1/2 p-4">
                        <ProductDetails
                            name="پیراهن صورتی زنانه"
                            price="26.00"
                            originalPrice="350.00"
                            description="این یک واقعیت ثابت شده است که خواننده هنگام نگاه کردن به صفحه‌بندی، با محتوای قابل خواندن یک صفحه، حواسش پرت می‌شود."
                            brand="PixelStrap"
                            availability="موجود در انبار"
                            seller="ABC"
                            material="پنبه"
                        />

                        {/* Color Options */}
                        <div className="flex items-center mt-4">
                            <span className="mr-2 text-gray-700">
                                رنگ‌ها:
                            </span>
                            <div className="flex gap-x-2">
                                {colors.map((color) => (
                                    <span
                                        key={color.id}
                                        className={`w-6 h-6 ${color.className} rounded-full`}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-6">
                            <button className="bg-green-500 text-white py-2 px-4 rounded">
                                اکنون بخرید
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded">
                                افزودن به سبد خرید
                            </button>
                            <button className="bg-pink-500 text-white py-2 px-4 rounded">
                                افزودن به آرزوها
                            </button>
                        </div>

                        {/* Rating and Share */}
                        <div className="mt-4">
                            {/* Rating */}
                            <div className="flex items-center">
                                <span className="text-gray-600">
                                    اکنون امتیاز دهید:
                                </span>
                                <div className="flex mr-2">
                                    {[...Array(5)].map(
                                        (_, index) => (
                                            <span
                                                key={index}
                                                className={
                                                    index <
                                                    4
                                                        ? "text-yellow-500"
                                                        : "text-gray-400"
                                                }
                                            >
                                                {index < 4
                                                    ? "★"
                                                    : "☆"}
                                            </span>
                                        )
                                    )}
                                </div>
                                <span className="mr-2 text-gray-600">
                                    (250 بررسی)
                                </span>
                            </div>

                            {/* Share */}
                            <div className="mt-2">
                                <span className="text-gray-600">
                                    آن را به اشتراک بگذارید:
                                </span>
                                <div className="flex gap-x-2 mt-1">
                                    {socialPlatforms.map(
                                        (platform) => (
                                            <button
                                                key={
                                                    platform.name
                                                }
                                                className="text-gray-500"
                                            >
                                                {
                                                    platform.icon
                                                }
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 p-4">
                    <Sidebar
                        categories={[
                            "پوشاک",
                            "بگ",
                            "کفش",
                            "ساعت",
                            "اکسسوری",
                        ]}
                        shippingInfo="ارسال رایگان به سراسر جهان"
                    />
                </div>

                {/* Product Image & Details */}
            </div>

            {/* Footer */}
            <div className="w-full">
                <Footer
                    year={2024}
                    company="My E-Commerce Page"
                />
            </div>
        </div>
    );
}
