"use client";
import React from "react";
import PulsatingButton from "./ui/pulsating-button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import {
    RoughEase,
    ExpoScaleEase,
    SlowMo,
} from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Icon1 from "@/public/assets/ProductionIcons/icon1.png";
import Icon2 from "@/public/assets/ProductionIcons/icon2.png";
import Icon3 from "@/public/assets/ProductionIcons/icon3.png";
import Icon4 from "@/public/assets/ProductionIcons/icon4.png";
import Icon5 from "@/public/assets/ProductionIcons/icon5.png";
import paint from "@/public/assets/color.jpg";
import chemical from "@/public/assets/chemical.jpg";
import printing from "@/public/assets/printing.jpg";
import wood from "@/public/assets/wood-indutry.jpg";
import texttile from "@/public/assets/textile-industry.jpg";
import adtive from "@/public/assets/additive.jpg";

gsap.registerPlugin(
    useGSAP,
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase
);

import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import WordPullUp from "./magicui/word-pull-up";
import { TextEffect } from "./TextEffect";

const Content = () => {
    return (
        <div>
            <ContentItem
                text={contentData.text}
                title={contentData.title}
                companyName={contentData.companyName}
            />
        </div>
    );
};

export default Content;

export type ContentItem = {
    title: string;
    text: string;
    companyName: string;
};

const contentData: ContentItem = {
    title: "درباره ما",
    companyName: "شرکت تولیدی و صنعتی آوا شیمی",
    text: "شرکت تولیدی و صنعتی آوا شیمی در سال 1368 با هدف تولید انواع رزین های امولسیونی اعم از همو پلیمر و کوپلیمر آغاز به کار کرد و در ادامه در جهت خودکفایی کشور و خدمت به جامعه صنعتی موفق به گسترش روزافزون محصولات خود گردید. شرکت تولیدی و صنعتی آوا شیمی با بهره گیری از دو دهه تجربه، دانش فنی متخصصان مجرب و کارآمد و به کارگیری بهترین مواد اولیه و تجهیزات، بهبود کیفیت محصولات را سرلوحه کار خود قرار داده و اینک قسمتی از مواد اولیه صنایع نساجی، رنگ، چسب و شیمی ساختمان را در اختیار آنان قرار می دهد. تنوع تولیدات، کیفیت مطلوب، بسته بندی مناسب و نظم در حمل و نقل به موقع رمز موفقیت این شرکت می باشد.",
};

export const ContentItem = ({
    text,
    title,
    companyName,
}: ContentItem) => {
    return (
        <section
            dir="rtl"
            className="container"
        >
            <div className="flex my-10 flex-col justify-center items-center gap-y-3 font-iransans">
                <WordPullUp
                    className=" self-start text-black"
                    words={title}
                ></WordPullUp>

                <WordPullUp
                    className=" self-start text-red-500"
                    words={companyName}
                ></WordPullUp>

                {/* <BlurFade delay={1.5}>
                    </BlurFade> */}
                <TextEffect preset="scale">
                    {text}
                </TextEffect>

                <Link
                    href={"/aboutus"}
                    className=" self-start bg-primary-foreground text-foreground  hover:text-primary-foreground font-semibold p-3 hover:bg-primary shadow-md shadow-slate-400 bg-white rounded-xl"
                >
                    <WordPullUp
                        className="text-sm"
                        words="ادامه مطلب"
                    ></WordPullUp>
                </Link>
            </div>

            <div
                dir="ltr"
                className="grid grid-cols-1   md:grid-cols-3 md:grid-rows-2 text-center p-4 gap-10 mx-auto"
            >
                <ProductionItem
                    icon={Icon3}
                    href={ProductionItems[2].href}
                    name={ProductionItems[2].name}
                    className={ProductionItems[2].className}
                    desctiption={
                        ProductionItems[2].desctiption
                    }
                />
                <ProductionItem
                    icon={Icon2}
                    href={ProductionItems[1].href}
                    name={ProductionItems[1].name}
                    className={ProductionItems[1].className}
                    desctiption={
                        ProductionItems[1].desctiption
                    }
                />
                <ProductionItem
                    icon={Icon1}
                    href={ProductionItems[0].href}
                    name={ProductionItems[0].name}
                    className={`${ProductionItems[0].className}  md:row-span-2 
                        `}
                    desctiption={
                        ProductionItems[0].desctiption
                    }
                />
                <ProductionItem
                    icon={Icon5}
                    href={ProductionItems[4].href}
                    name={ProductionItems[4].name}
                    className={ProductionItems[4].className}
                    desctiption={
                        ProductionItems[4].desctiption
                    }
                />
                <ProductionItem
                    icon={Icon4}
                    href={ProductionItems[3].href}
                    name={ProductionItems[3].name}
                    className={ProductionItems[3].className}
                    desctiption={
                        ProductionItems[3].desctiption
                    }
                />
            </div>

            <div className="font-iransans my-10">
                <div className="flex items-center gap-3">
                    <span className="text-2xl text-red-500">
                        کاربرد محصولات
                    </span>
                    <div className="w-16 h-1 bg-slate-400"></div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {productCategories.map(
                        (category, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 transform hover:scale-105"
                            >
                                <Image
                                    src={category.src}
                                    alt={category.alt}
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    className="rounded-lg"
                                />
                                <div className="absolute bottom-0 w-full p-4 text-xl font-bold text-black bg-slate-200 bg-opacity-85 text-start">
                                    {category.label}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

interface CardProps {
    image: string;
    title: string;
}

const productCategories = [
    {
        src: paint,
        alt: "image",
        label: "رنگ و پوشش",
    },
    {
        src: chemical,
        alt: "image",
        label: "شیمی ساختمان",
    },
    {
        src: printing,
        alt: "image",
        label: "صنعت چاپ و بسته بندی",
    },
    {
        src: wood,
        alt: "image",
        label: "صنایع چوبی",
    },
    {
        src: texttile,
        alt: "image",
        label: "صنعت نساجی",
    },
    {
        src: adtive,
        alt: "image",
        label: "ادتیو ها",
    },
];
interface CardProps {
    image: string;
    alt: string;
    label: string;
}

export type Production = {
    icon: any;
    name: string;
    desctiption: string;
    href: string;
    className: string;
};

const ProductionItems: Production[] = [
    {
        icon: Icon1,
        name: "هموپلیمرها وینیل استاتی پایه آب",
        desctiption: "زیبایی و دوام در یک پوشش",
        href: "/products/hemoPolymer",
        className: " font-iransans ",
    },
    {
        icon: Icon2,
        name: "کوپلیمر وینیل استاتی پایه آب",
        desctiption: "پوششی بادوام و سازگار با محیط زیست",
        href: "/products/coVinylPolymer",
        className: " font-iransans ",
    },
    {
        icon: Icon3,
        name: "کوپلیمر استایرن اکریلیک پایه آب",
        desctiption: "انعطاف پذیری و مقاومت در برابر ضربه",
        href: "/products/coStyreneAcrylicPolymer",
        className: "font-iransans",
    },
    {
        icon: Icon4,
        name: "کوپلیمر اکریلیک خالص",
        desctiption: "پلیمری با خواص منحصر به فرد",
        href: "/products/pureAcrylicPolymer",
        className: "font-iransans",
    },
    {
        icon: Icon5,
        name: "ادتیوها",
        desctiption: "بهبود دهنده های عملکرد مواد",
        href: "/products/additives",
        className: "font-iransans",
    },
];

export const ProductionItem = ({
    icon,
    name,
    desctiption,
    href,
    className,
}: Production) => {
    return (
        <Link
            className={cn(
                "bg-gradient-to-tr  border shadow-md  rounded-xl   flex flex-col justify-center h-full  items-center hover:-translate-y-4 ease-out duration-500 transition-all ",
                className
            )}
            href={href}
        >
            <div className="flex flex-col justify-center items-center gap-y-3 p-6">
                <Image
                    loading="lazy"
                    src={icon}
                    alt="icon"
                />
                <h1 className="text-xl font-bold">
                    {name}
                </h1>
                <p className="font-semibold text-gray-600 ">
                    {desctiption}
                </p>
            </div>
        </Link>
    );
};
