"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

type ContactFormProps = {
    nameLabel?: string;
    emailLabel?: string;
    phoneLabel?: string;
    companyLabel?: string;
    messageLabel?: string;
    address?: string;
    phone?: string;
    email?: string;
    extraInfo?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
    nameLabel = "نام",
    emailLabel = "ایمیل",
    phoneLabel = "تلفن",
    companyLabel = "نام شرکت",
    messageLabel = "پیام",
    address = "خیابان آسپن 9757، جنوب ریچموند هیل، نیویورک 11419",
    phone = "+1 (291) 939 9321",
    email = "info@mywebsite.com",
    extraInfo = "لطفاً هر گونه سؤال یا درخواست خود را با ما در میان بگذارید.",
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [errors, setErrors] = useState<{
        [key: string]: string;
    }>({});

    const validateForm = () => {
        let formErrors: { [key: string]: string } = {};
        if (!formData.name)
            formErrors.name = "نام ضروری است";
        if (!formData.email)
            formErrors.email = "ایمیل ضروری است";
        if (!formData.phone)
            formErrors.phone = "شماره تلفن ضروری است";
        if (!formData.message)
            formErrors.message = "پیام ضروری است";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log("Form data:", formData);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50 font-iransans animate-fadeIn">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl w-full max-w-4xl p-10 flex flex-col lg:flex-row lg:gap-16 transform transition-all hover:shadow-3xl animate-slideUp">
                <div className="w-full lg:w-2/3">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 animate-fadeInSlow">
                        ارسال پیام به ما
                    </h2>
                    <form
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="animate-fadeInSlow">
                            <label className="block text-sm font-semibold text-gray-700">
                                {nameLabel}
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target
                                            .value,
                                    })
                                }
                                placeholder="نام شما"
                                className={`mt-2 p-3 border ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="animate-fadeInSlow">
                            <label className="block text-sm font-semibold text-gray-700">
                                {emailLabel}
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target
                                            .value,
                                    })
                                }
                                placeholder="ایمیل شما"
                                className={`mt-2 p-3 border ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="animate-fadeInSlow">
                            <label className="block text-sm font-semibold text-gray-700">
                                {phoneLabel}
                            </label>
                            <input
                                type="text"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target
                                            .value,
                                    })
                                }
                                placeholder="شماره تلفن"
                                className={`mt-2 p-3 border ${
                                    errors.phone
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.phone && (
                                <span className="text-red-500 text-sm">
                                    {errors.phone}
                                </span>
                            )}
                        </div>
                        <div className="animate-fadeInSlow">
                            <label className="block text-sm font-semibold text-gray-700">
                                {companyLabel}
                            </label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        company:
                                            e.target.value,
                                    })
                                }
                                placeholder="نام شرکت"
                                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="lg:col-span-2 animate-fadeInSlow">
                            <label className="block text-sm font-semibold text-gray-700">
                                {messageLabel}
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message:
                                            e.target.value,
                                    })
                                }
                                placeholder="پیام خود را بنویسید"
                                className={`mt-2 p-3 border ${
                                    errors.message
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg w-full h-36 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            ></textarea>
                            {errors.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                        <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transform transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 lg:col-span-2 animate-bounceIn">
                            ارسال پیام
                        </button>
                    </form>
                </div>
                <div className="w-full lg:w-1/3 mt-12 lg:mt-0 animate-slideUp">
                    <h3 className="text-2xl font-semibold mb-8 text-gray-800 animate-fadeInSlow">
                        اطلاعات تماس
                    </h3>
                    <div className="mb-6 flex items-start animate-fadeInSlow">
                        <MapPin className="w-6 h-6 text-blue-600 ml-3" />
                        <p className="text-gray-700">
                            {address}
                        </p>
                    </div>
                    <div className="mb-6 flex items-start animate-fadeInSlow">
                        <Phone className="w-6 h-6 text-blue-600 ml-3" />
                        <p className="text-gray-700">
                            {phone}
                        </p>
                    </div>
                    <div className="mb-6 flex items-start animate-fadeInSlow">
                        <Mail className="w-6 h-6 text-blue-600 ml-3" />
                        <p className="text-gray-700">
                            {email}
                        </p>
                    </div>
                    <p className="text-gray-600 animate-fadeInSlow">
                        {extraInfo}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
