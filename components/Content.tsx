"use client";
import React from "react";
import BlurFade from "./magicui/blur-fade";
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
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import {
    BentoCard,
    BentoGrid,
} from "@/components/magicui/bento-grid";
import { Button } from "./ui/button";
import Link from "next/link";
import { title } from "process";
import { cn } from "@/lib/utils";
import Image from "next/image";
import WordPullUp from "./magicui/word-pull-up";

const Content = () => {
    useGSAP(() => {
        gsap.from(".text-justify", {
            y: 100,
            stagger: 1.5,
        });
    }, []);
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
        <div
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

                <BlurFade delay={1.5}>{text}</BlurFade>

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
            <BlurFade delay={2}>
                <div
                    dir="ltr"
                    className="grid grid-cols-1   md:grid-cols-3 md:grid-rows-2 text-center p-4 gap-10 mx-auto"
                >
                    <ProductionItem
                        icon={Icon3}
                        href={ProductionItems[2].href}
                        name={ProductionItems[2].name}
                        className={
                            ProductionItems[2].className
                        }
                        desctiption={
                            ProductionItems[2].desctiption
                        }
                    />
                    <ProductionItem
                        icon={Icon2}
                        href={ProductionItems[1].href}
                        name={ProductionItems[1].name}
                        className={
                            ProductionItems[1].className
                        }
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
                        className={
                            ProductionItems[4].className
                        }
                        desctiption={
                            ProductionItems[4].desctiption
                        }
                    />
                    <ProductionItem
                        icon={Icon4}
                        href={ProductionItems[3].href}
                        name={ProductionItems[3].name}
                        className={
                            ProductionItems[3].className
                        }
                        desctiption={
                            ProductionItems[3].desctiption
                        }
                    />
                </div>
            </BlurFade>
        </div>
    );
};

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
