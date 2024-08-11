import React from "react";
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
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 font-iransans">
            <div className="bg-white border border-gray-300 shadow-2xl rounded-lg w-full max-w-4xl p-8 flex flex-col lg:flex-row lg:gap-8">
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">
                        ارسال پیام به ما
                    </h2>
                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {nameLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="نام شما"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {emailLabel}
                            </label>
                            <input
                                type="email"
                                placeholder="ایمیل شما"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {phoneLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="شماره تلفن"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {companyLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="نام شرکت"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                {messageLabel}
                            </label>
                            <textarea
                                placeholder="پیام خود را بنویسید"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"
                            ></textarea>
                        </div>
                        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 lg:col-span-2">
                            ارسال پیام
                        </button>
                    </form>
                </div>
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <h3 className="text-xl font-semibold mb-4">
                        اطلاعات تماس
                    </h3>
                    <div className="mb-4 flex items-start">
                        <MapPin className="w-6 h-6 text-gray-700 ml-2" />
                        <p>{address}</p>
                    </div>
                    <div className="mb-4 flex items-start">
                        <Phone className="w-6 h-6 text-gray-700 ml-2" />
                        <p>{phone}</p>
                    </div>
                    <div className="mb-4 flex items-start">
                        <Mail className="w-6 h-6 text-gray-700 ml-2" />
                        <p>{email}</p>
                    </div>
                    <p>{extraInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
