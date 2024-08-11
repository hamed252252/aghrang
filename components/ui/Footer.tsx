import Link from "next/link";
import React from "react";

type UsefulLink = {
    name: string;
    link: string;
};

const usefulLinks: UsefulLink[] = [
    {
        name: "آشنایی با آواشیمی",
        link: "/about-awashimi",
    },
    {
        name: "گواهینامه‌ها و مجوزها",
        link: "/certificates-and-licenses",
    },
    {
        name: "تقدیرنامه‌ها",
        link: "/commendations",
    },
    {
        name: "گالری تصاویر",
        link: "/image-gallery",
    },
    {
        name: "گالری ویدیویی",
        link: "/video-gallery",
    },
    {
        name: "حضورهای نمایشگاهی",
        link: "/exhibition-participations",
    },
];

type ContactInfo = {
    officeAddress: string;
    karajPhones: string[];
    tehranPhones: string[];
    fax: string;
    techSupportEmail: string;
    publicRelationsEmail: string;
    gps: string;
};

const contactInfo: ContactInfo = {
    officeAddress:
        "جاده مخصوص کرج، گرمدره، روبروی اتمسفر، خیابان تاجبخش، خیابان زرشکی، پلاک 771 ",
    karajPhones: [
        "36102231 - 026",
        "36102232 - 026",
        "36107182 - 026",
    ],
    tehranPhones: ["88044441 - 021 الی 3"],
    fax: "36102023 - 026",
    techSupportEmail: "tech_support@awashimi.com",
    publicRelationsEmail: "info@awashimi.com",
    gps: "(مسیریابی)",
};
export type SubUtility = {
    name: string;
    link: string;
};

export type Utility = {
    name: string;
    link: string;
    subUtilities?: SubUtility[];
};

export const utilities: Utility[] = [
    {
        name: "رنگ و پوشش",
        link: "/color-and-coating",
    },
    {
        name: "شیمی ساختمان",
        link: "/building-chemistry",
    },
    {
        name: "صنعت چاپ و بسته بندی",
        link: "/printing-and-packaging-industry",
    },
    {
        name: "صنایع چوب",
        link: "/wood-industries",
    },
    {
        name: "صنعت نساجی",
        link: "/textile-industry",
    },
    {
        name: "ادتیوها",
        link: "/additives",
    },
];

const UtilityComponentItems = ({ link, name }: Utility) => {
    return (
        <div className="my-3 flex items-center p-2">
            <div className="w-1 h-1 bg-green-600 flex ml-2 rounded-full"></div>
            <Link
                href={link}
                className="hover:text-red-600"
            >
                {name}
            </Link>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <div className="flex font-iransans  mt-10 bg-gradient-to-r from-green-200 to-green-100 rounded  w-full ">
                <div className="flex flex-col p-10 justify-center md:gap-x-32 items-stretch mx-auto   md:flex-row w-full">
                    <div className="flex flex-col  ">
                        <Section title="اطلاعات تماس">
                            <div className="my-3">
                                <span>
                                    <span className="text-red-600">
                                        دفتر مرکزی:{"  "}
                                    </span>
                                    <span className="text-sm">
                                        {
                                            contactInfo.officeAddress
                                        }
                                    </span>
                                    <span className="text-red-600 text-wrap">
                                        {contactInfo.gps}
                                    </span>
                                </span>
                            </div>
                            <ContactInfoItem
                                label="تلفن کرج"
                                items={
                                    contactInfo.karajPhones
                                }
                            />
                            <ContactInfoItem
                                label="تلفن تهران"
                                items={
                                    contactInfo.tehranPhones
                                }
                            />
                            <ContactInfoItem
                                label="فکس"
                                items={[contactInfo.fax]}
                            />
                            <ContactInfoItem
                                label="ایمیل پشتیبانی فنی"
                                items={[
                                    contactInfo.techSupportEmail,
                                ]}
                                email
                            />
                            <ContactInfoItem
                                label="ایمیل روابط عمومی"
                                items={[
                                    contactInfo.publicRelationsEmail,
                                ]}
                                email
                            />
                        </Section>
                    </div>
                    <div className="flex flex-col  ">
                        <Section title="کاربرد محصولات">
                            {utilities.map((item) => (
                                <UtilityComponentItems
                                    key={item.link}
                                    {...item}
                                />
                            ))}
                        </Section>
                    </div>
                    <div className="flex flex-col  ">
                        <Section title="لینک‌های مفید">
                            {usefulLinks.map((item) => (
                                <UtilityComponentItems
                                    key={item.link}
                                    {...item}
                                />
                            ))}
                        </Section>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200 w-full font-iransans h-10 flex justify-center items-center ">
                <span>
                    کلیه حقوق مادی و معنوی این سایت متعلق به
                    شرکت تولیدی و صنعتی آق رنگ می‌باشد.
                </span>
            </div>
        </>
    );
};

const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col mb-4">
        <div className="relative">
            <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="h-[0.1rem] max-w-36 my-2 w-full bg-green-800"></div>
        {children}
    </div>
);

const ContactInfoItem = ({
    label,
    items,
    email = false,
}: {
    label: string;
    items: string[];
    email?: boolean;
}) => (
    <div className="my-3">
        <span>
            <span className="text-red-600">
                {label}:{"  "}
            </span>
            <span
                dir="rtl"
                className="text-sm text-green-500"
            >
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {email ? (
                            <a href={`mailto:${item}`}>
                                {item}
                            </a>
                        ) : (
                            <a
                                href={`tel:+${item.replace(
                                    /\D/g,
                                    ""
                                )}`}
                            >
                                {item}
                            </a>
                        )}
                        {index < items.length - 1 && ", "}
                    </React.Fragment>
                ))}
            </span>
        </span>
    </div>
);

export default Footer;
