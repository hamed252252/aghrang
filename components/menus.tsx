"use client";
import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/aghrang_preview_rev_1.png";
import { log } from "console";
import { Input } from "./ui/input";
import {
    ArrowDownFromLine,
    ChevronsDown,
    Ghost,
    Search,
} from "lucide-react";
import { Utility } from "./ui/Footer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Menus = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className=" hidden   hover:text-primary-foreground bg-transparent group-hover:bg-white text-black xl:flex flex-col  group hover:bg-primary  font-iransans   justify-center w-full flex-1 items-start mx-auto h-24   p-2 text-primary ">
                <div
                    dir="rtl"
                    className=" flex justify-between group-hover: items-center w-full"
                >
                    <div className=" ">
                        <Link href={"/"}>
                            <Image
                                width={90}
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div
                        dir="rtl"
                        className=" "
                    >
                        <NavigationMenu
                            skipDelayDuration={2000}
                            className="bg-transparent group-hover:bg-white: w-full"
                        >
                            <NavigationMenuList className="gap-2 text-nowrap">
                                <NavigationMenuItem className="w-full  group-hover:bg-transparent  hover:text-primary-foreground">
                                    <div className=" justify-center flex w-full max-w-sm items-center space-x-2">
                                        <Input
                                            type="search"
                                            placeholder=" 🔍جستجو کنید"
                                            className="w-46 placeholder:text-black  placeholder:text-start  group-hover:placeholder:text-black"
                                        ></Input>
                                        <Button
                                            type="submit"
                                            className="group-hover:bg-white group-hover:text-black"
                                        >
                                            جستجو کنید
                                        </Button>
                                    </div>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent group-hover:bg-transparent hover:text-primary-foreground">
                                        چند رسانه ای
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="group-hover:bg-transparent  flex justify-end space-x-6  mx-auto w-full items-end hover:text-primary-foreground">
                                        <div className="p-4 flex justify-end space-x-6  mx-auto w-full items-end">
                                            <Button>
                                                حضور
                                                نمایشگاهی
                                            </Button>
                                            <Button>
                                                گالری تصاویر
                                            </Button>
                                            <Button>
                                                گالری ویدو
                                            </Button>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem className="group-hover:bg-transparent  hover:text-primary-foreground">
                                    <Link href={"/aboutus"}>
                                        درباره ی ما
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        className=" hover:text-primary-foreground "
                                        href="/contactus"
                                    >
                                        تماس با ما
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className=" bg-transparent group-hover:bg-transparent
                                    
                                    hover:text-primary-foreground"
                                    >
                                        <Link
                                            href={
                                                "/products"
                                            }
                                        >
                                            محصولات
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex justify-center p-4 space-x-6 h-[70vh] w-[97vw] gap-x-6  ">
                                            <ul className="flex space-x-6  gap-x-6  text-nowrap rtl:space-x-reverse">
                                                {products.map(
                                                    (
                                                        product
                                                    ) => (
                                                        <li
                                                            key={
                                                                product.name
                                                            }
                                                            className="group relative"
                                                        >
                                                            <Link
                                                                href={
                                                                    product.href
                                                                }
                                                                className="text-primary hover:text-green-900"
                                                            >
                                                                {
                                                                    product.name
                                                                }
                                                            </Link>
                                                            <ul className="absolute hidden  p-8 group-hover:block bg-white  mt-2">
                                                                {product.subProducts.map(
                                                                    (
                                                                        subProduct
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                subProduct.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    subProduct.href
                                                                                }
                                                                                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600"
                                                                            >
                                                                                {
                                                                                    subProduct.name
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem className="w-full">
                                    <NavigationMenuTrigger className="bg-transparent group-hover:bg-transparent  hover:text-primary-foreground">
                                        کاربرد محصولات
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {/* list  */}

                                        <ul className="flex justify-center p-8 space-x-6 h-[70vh] w-[97vw] gap-x-6 text-primary  rtl:space-x-reverse ">
                                            {utilities.map(
                                                (
                                                    utility
                                                ) => (
                                                    <li
                                                        key={
                                                            utility.name
                                                        }
                                                        className="group w-full h-full relative"
                                                    >
                                                        <Link
                                                            href={
                                                                utility.href
                                                            }
                                                            className="text-primary hover:text-green-900"
                                                        >
                                                            {
                                                                utility.name
                                                            }
                                                        </Link>
                                                        <ul className="absolute hidden transition-opacity opacity-100 group-hover:block bg-white mt-2">
                                                            {utility.subUtilities.map(
                                                                (
                                                                    subUtility
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            subUtility.name
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                subUtility.href
                                                                            }
                                                                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600"
                                                                        >
                                                                            {
                                                                                subUtility.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href={"/faq"}>
                                        سوالات متداول
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href={"/customers"}
                                    >
                                        مشتریان
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={"/chart"}>
                                        چارت سازمانی
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/blog"
                                        className="text-md hover:text-green-500 ease-out duration-300 transition-all"
                                    >
                                        بلاگ
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
            <div className="flex justify-around items-start xl:hidden p-2">
                <div></div>
                <div className="mt-4 flex-col flex items-start  justify-start">
                    <button
                        onClick={handleClick}
                        className="flex flex-col justify-center items-center"
                    >
                        <span
                            className={`bg-green-500 block transition-all duration-300 ease-out 
                    h-[0.1rem] w-6 rounded-sm ${
                        isOpen
                            ? "rotate-45 translate-y-1"
                            : "-translate-y-0.5"
                    }`}
                        ></span>
                        <span
                            className={`bg-green-500 block transition-all duration-300 ease-out 
                    h-[0.1rem] w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                        ></span>
                        <span
                            className={`bg-green-500 block transition-all duration-300 ease-out 
                    h-[0.1rem] w-6 rounded-sm ${
                        isOpen
                            ? "-rotate-45 -translate-y-1"
                            : "translate-y-0.5"
                    }`}
                        ></span>
                    </button>
                    <Drawer
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        direction="bottom"
                    >
                        <DrawerTrigger
                            asChild
                        ></DrawerTrigger>
                        <DrawerContent className="w-full    h-[70vh] p-4 font-iransans ">
                            <DrawerHeader></DrawerHeader>
                            <div className="flex flex-col gap-y-2 text-lg text-black">
                                <Accordion
                                    type="single"
                                    collapsible
                                >
                                    <AccordionItem value="about-us">
                                        <Link
                                            href={
                                                "/aboutus"
                                            }
                                        >
                                            درباره ی ما
                                        </Link>
                                    </AccordionItem>

                                    <AccordionItem value="utilities">
                                        <AccordionTrigger>
                                            کاربرد محصولات
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col p-4 justify-center items-center">
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                >
                                                    {utilities.map(
                                                        (
                                                            utility,
                                                            index
                                                        ) => (
                                                            <AccordionItem
                                                                key={
                                                                    index
                                                                }
                                                                value={`utility-${index}`}
                                                            >
                                                                <AccordionTrigger>
                                                                    {
                                                                        utility.name
                                                                    }
                                                                </AccordionTrigger>
                                                                <AccordionContent>
                                                                    <div className="flex flex-col p-4 justify-center items-center">
                                                                        {utility.subUtilities.map(
                                                                            (
                                                                                subItem,
                                                                                subIndex
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        subIndex
                                                                                    }
                                                                                    href={
                                                                                        subItem.href
                                                                                    }
                                                                                    className="block w-full h-fit hover:text-green-500 transition-all ease-in-out duration-300"
                                                                                >
                                                                                    {
                                                                                        subItem.name
                                                                                    }
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        )
                                                    )}
                                                </Accordion>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="products">
                                        <AccordionTrigger>
                                            محصولات
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col p-4 justify-center items-center">
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                >
                                                    {products.map(
                                                        (
                                                            product,
                                                            index
                                                        ) => (
                                                            <AccordionItem
                                                                key={
                                                                    index
                                                                }
                                                                value={`product-${index}`}
                                                            >
                                                                <AccordionTrigger>
                                                                    {
                                                                        product.name
                                                                    }
                                                                </AccordionTrigger>
                                                                <AccordionContent>
                                                                    <div className="flex flex-col p-4 justify-center items-center">
                                                                        {product.subProducts.map(
                                                                            (
                                                                                subItem,
                                                                                subIndex
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        subIndex
                                                                                    }
                                                                                    href={
                                                                                        subItem.href
                                                                                    }
                                                                                    className="block w-full h-fit hover:text-green-500 transition-all ease-in-out duration-300"
                                                                                >
                                                                                    {
                                                                                        subItem.name
                                                                                    }
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        )
                                                    )}
                                                </Accordion>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="multimedia">
                                        <AccordionTrigger>
                                            چند رسانه ای
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col p-4 justify-center items-center">
                                                {multiMedia.map(
                                                    (
                                                        item,
                                                        index
                                                    ) => (
                                                        <Link
                                                            key={
                                                                index
                                                            }
                                                            href={
                                                                item.link
                                                            }
                                                            className="w-full h-fit hover:text-green-500 transition-all ease-in-out duration-300"
                                                        >
                                                            {
                                                                item.name
                                                            }
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <div className="my-2">
                                        <Link
                                            href="/contactus"
                                            className="text-md  hover:text-green-500 ease-out duration-300 transition-all"
                                        >
                                            تماس به ما
                                        </Link>
                                    </div>
                                    <div className="my-2">
                                        <Link
                                            href="/chart"
                                            className="text-md hover:text-green-500 ease-out duration-300 transition-all"
                                        >
                                            چارت سازمانی
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="/blog"
                                            className="text-md hover:text-green-500 ease-out duration-300 transition-all"
                                        >
                                            بلاگ
                                        </Link>
                                    </div>
                                </Accordion>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="self-end">
                    <Image
                        src={logo}
                        alt="Logo Brand"
                        width={35}
                    />
                </div>
            </div>
        </>
    );
};

export default Menus;
interface MenuItem {
    text: string;
    icon: JSX.Element;
    link: string;
}
import {
    FaInfoCircle,
    FaCertificate,
    FaAward,
} from "react-icons/fa"; // Example icons from react-icons
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { useGSAP } from "@gsap/react";
import BlurFade from "./magicui/blur-fade";
import BlurIn from "./magicui/blur-in";
import {
    NavigationMenuLink,
    NavigationMenuSub,
} from "@radix-ui/react-navigation-menu";

// Define the type
type Multimedia = {
    name: string;
    link: string;
};

// Create a variable with three items
let multiMedia: Multimedia[] = [
    {
        name: "حضور های نمایشگاهی", // Exhibition Attendance
        link: "exhibition-attendance",
    },
    {
        name: "گالری تصاویر", // Image Gallery
        link: "image-gallery",
    },
    {
        name: "گالری ویدویی", // Video Gallery
        link: "video-gallery",
    },
];

const aboutUsMenuItems: MenuItem[] = [
    {
        text: "آشنایی با آوا شیمی",
        icon: <FaInfoCircle />, // Replace with your actual About-Us-Icon
        link: "aboutus/introduction",
    },
    {
        text: "گواهینامه‌ها و مجوزها",
        icon: <FaCertificate />, // Replace with your actual Certificate-Icon
        link: "aboutus/certificates",
    },
    {
        text: "تقدیرنامه‌ها",
        icon: <FaAward />, // Replace with your actual Acknowledgements-Icon
        link: "aboutus/acknowledgements",
    },
];

const utilities = [
    {
        name: "رنگ و پوشش",
        href: "/colors-coatings",
        subUtilities: [
            {
                name: "رنگ پلاستیک داخل ساختمان (پایه آب)",
                href: "/colors-coatings/plastic-paint",
            },
            {
                name: "رنگ داخل ساختمان (اکریلیک)",
                href: "/colors-coatings/acrylic-paint",
            },
            {
                name: "پوشش نما (لاک)",
                href: "/colors-coatings/veneer-coating",
            },
            {
                name: "رنگهای هنری و دکوراتیو",
                href: "/colors-coatings/artistic-decorative-paints",
            },
            {
                name: "پوشش مینرال",
                href: "/colors-coatings/mineral-coating",
            },
            {
                name: "پوشش گرانولیت",
                href: "/colors-coatings/granolit-coating",
            },
            {
                name: "پوشش سلولزی",
                href: "/colors-coatings/cellulosic-coating",
            },
            {
                name: "رنگ نما",
                href: "/colors-coatings/outer-wall-paint",
            },
            {
                name: "آستری",
                href: "/colors-coatings/primer",
            },
            {
                name: "مولتی کالر",
                href: "/colors-coatings/multi-color",
            },
            {
                name: "رنگ استخری",
                href: "/colors-coatings/pool-paint",
            },
        ],
    },
    {
        name: "شیمی ساختمان",
        href: "/building-chemicals",
        subUtilities: [
            {
                name: "عایق رطوبتی (عایق سفید بام)",
                href: "/building-chemicals/waterproofing",
            },
            {
                name: "پوشش های آب بند",
                href: "/building-chemicals/sealing-coatings",
            },
            {
                name: "خمیر درزگیر",
                href: "/building-chemicals/joint-sealant",
            },
            {
                name: "ملات های ساختمانی",
                href: "/building-chemicals/construction-mortars",
            },
            {
                name: "پوشش های گرانولیت",
                href: "/building-chemicals/granolit-coatings",
            },
            {
                name: "چسب بتن",
                href: "/building-chemicals/concrete-adhesive",
            },
            {
                name: "چسب کاشی",
                href: "/building-chemicals/tile-adhesive",
            },
            {
                name: "چسب PVC و پنل های گچی",
                href: "/building-chemicals/pvc-adhesive",
            },
            {
                name: "کفپوش",
                href: "/building-chemicals/floor-coverings",
            },
            {
                name: "پد سلولزی",
                href: "/building-chemicals/cellulose-pads",
            },
            {
                name: "استحکام بتن",
                href: "/building-chemicals/concrete-strengthening",
            },
            {
                name: "کنیتکس",
                href: "/building-chemicals/konitex",
            },
        ],
    },
    {
        name: "صنعت چاپ و بسته بندی",
        href: "/printing-packaging",
        subUtilities: [
            {
                name: "مرکب چاپ",
                href: "/printing-packaging/printing-inks",
            },
            {
                name: "چاپ پیگمنت",
                href: "/printing-packaging/pigment-printing",
            },
            {
                name: "چسب فشار حساس",
                href: "/printing-packaging/pressure-sensitive-adhesives",
            },
            {
                name: "چسب سلفون",
                href: "/printing-packaging/selvage-adhesive",
            },
            {
                name: "چسب صحافی",
                href: "/printing-packaging/binding-adhesive",
            },
            {
                name: "تکمیل منسوجات بی بافت",
                href: "/printing-packaging/nonwoven-textile-finishing",
            },
            {
                name: "چسب بوم نقاشی",
                href: "/printing-packaging/canvas-adhesive",
            },
            {
                name: "چسب بسته بندی",
                href: "/printing-packaging/packaging-adhesives",
            },
            {
                name: "چسب شفاف (PVA15%)",
                href: "/printing-packaging/transparent-adhesive",
            },
            {
                name: "چاپ استیکر",
                href: "/printing-packaging/sticker-printing",
            },
            {
                name: "چسب باند گچی",
                href: "/printing-packaging/gummed-tape",
            },
            {
                name: "چسب کارتن",
                href: "/printing-packaging/carton-adhesive",
            },
        ],
    },
    {
        name: "صنایع چوب",
        href: "/wood-industry",
        subUtilities: [
            {
                name: "پوشش چوب",
                href: "/wood-industry/wood-coating",
            },
            {
                name: "چسب چوب",
                href: "/wood-industry/wood-adhesive",
            },
        ],
    },
    {
        name: "صنعت نساجی",
        href: "/textile-industry",
        subUtilities: [
            {
                name: "تکمیل لوردراپه",
                href: "/textile-industry/lordrape-finishing",
            },
            {
                name: "آهار فرش ماشینی",
                href: "/textile-industry/machine-carpet-stiffener",
            },
            {
                name: "آهار انواع پرده",
                href: "/textile-industry/curtain-stiffener",
            },
            {
                name: "آهار موکت",
                href: "/textile-industry/moquette-stiffener",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/additives",
        subUtilities: [
            {
                name: "ضد کف سیلیکونی",
                href: "/additives/silicone-anti-foam",
            },
        ],
    },
];

const products = [
    {
        name: "هموپلیمرها وینیل استاتی پایه آب",
        href: "/vinyl-acetate-homopolymers-water-based",
        subProducts: [
            {
                name: "AWA 100",
                href: "/vinyl-acetate-homopolymers-water-based/awa-100",
            },
            {
                name: "AWA H100",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h100",
            },
            {
                name: "AWA H120",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h120",
            },
            {
                name: "AWA H125",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h125",
            },
            {
                name: "AWA H130",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h130",
            },
            {
                name: "AWA 150",
                href: "/vinyl-acetate-homopolymers-water-based/awa-150",
            },
        ],
    },
    {
        name: "کوپلیمر وینیل استاتی پایه آب",
        href: "/vinyl-acetate-copolymers-water-based",
        subProducts: [
            {
                name: "AWA 22",
                href: "/vinyl-acetate-copolymers-water-based/awa-22",
            },
            {
                name: "AWA 220",
                href: "/vinyl-acetate-copolymers-water-based/awa-220",
            },
            {
                name: "AWA 225",
                href: "/vinyl-acetate-copolymers-water-based/awa-225",
            },
            {
                name: "AWA 55",
                href: "/vinyl-acetate-copolymers-water-based/awa-55",
            },
            {
                name: "AWA 60",
                href: "/vinyl-acetate-copolymers-water-based/awa-60",
            },
            {
                name: "AWA 66",
                href: "/vinyl-acetate-copolymers-water-based/awa-66",
            },
            {
                name: "MT 90",
                href: "/vinyl-acetate-copolymers-water-based/mt-90",
            },
        ],
    },
    {
        name: "کوپلیمر استایرن-اکرلیک پایه آب",
        href: "/styrene-acrylic-copolymers-water-based",
        subProducts: [
            {
                name: "SA 82",
                href: "/styrene-acrylic-copolymers-water-based/sa-82",
            },
            {
                name: "SA 83",
                href: "/styrene-acrylic-copolymers-water-based/sa-83",
            },
            {
                name: "SA 84",
                href: "/styrene-acrylic-copolymers-water-based/sa-84",
            },
            {
                name: "SA 85",
                href: "/styrene-acrylic-copolymers-water-based/sa-85",
            },
            {
                name: "SA 86",
                href: "/styrene-acrylic-copolymers-water-based/sa-86",
            },
            {
                name: "SA 87",
                href: "/styrene-acrylic-copolymers-water-based/sa-87",
            },
            {
                name: "SA 88",
                href: "/styrene-acrylic-copolymers-water-based/sa-88",
            },
            {
                name: "SA 88M",
                href: "/styrene-acrylic-copolymers-water-based/sa-88m",
            },
            {
                name: "SA 89B",
                href: "/styrene-acrylic-copolymers-water-based/sa-89b",
            },
            {
                name: "SA 90",
                href: "/styrene-acrylic-copolymers-water-based/sa-90",
            },
            {
                name: "SA 91",
                href: "/styrene-acrylic-copolymers-water-based/sa-91",
            },
            {
                name: "SA 400",
                href: "/styrene-acrylic-copolymers-water-based/sa-400",
            },
            {
                name: "SA 490H",
                href: "/styrene-acrylic-copolymers-water-based/sa-490h",
            },
            {
                name: "SA 490S",
                href: "/styrene-acrylic-copolymers-water-based/sa-490s",
            },
        ],
    },
    {
        name: "کوپلیمر اکریلیک خالص",
        href: "/pure-acrylic-copolymers",
        subProducts: [
            {
                name: "PA 77",
                href: "/pure-acrylic-copolymers/pa-77",
            },
            {
                name: "PA 78",
                href: "/pure-acrylic-copolymers/pa-78",
            },
            {
                name: "PA 79",
                href: "/pure-acrylic-copolymers/pa-79",
            },
            {
                name: "PA 117",
                href: "/pure-acrylic-copolymers/pa-117",
            },
            {
                name: "PA 117(II)",
                href: "/pure-acrylic-copolymers/pa-117-ii",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/additives",
        subProducts: [
            { name: "A 42", href: "/additives/a-42" },
            { name: "S-710", href: "/additives/s-710" },
        ],
    },
];
