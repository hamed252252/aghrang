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
                                            className="w-46 placeholder:text-black group-hover:placeholder:text-white  placeholder:text-start  "
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
                                            <Button
                                                variant="outline"
                                                className="text-primary hover:text-primary-foreground hover:bg-primary"
                                            >
                                                <Link
                                                    href={
                                                        "/exhibition"
                                                    }
                                                >
                                                    حضور
                                                    نمایشگاهی
                                                </Link>
                                            </Button>
                                            <Button
                                                className="text-primary hover:text-primary-foreground hover:bg-primary"
                                                variant="outline"
                                            >
                                                <Link
                                                    href={
                                                        "/gallery"
                                                    }
                                                >
                                                    گالری
                                                    تصاویر
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="text-primary hover:text-primary-foreground hover:bg-primary"
                                            >
                                                <Link
                                                    href={
                                                        "/videogallery"
                                                    }
                                                >
                                                    گالری
                                                    ویدو
                                                </Link>
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
                                        <div className="flex justify-center p-4 space-x-6 h-[70vh] w-[97vw] gap-x-6 overflow-x-auto overflow-y-scroll ">
                                            <ul className="flex space-x-6 gap-x-6 text-nowrap rtl:space-x-reverse ">
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
                                                            <ul className="absolute hidden group-hover:block bg-white mt-2">
                                                                <div className="">
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
                                                                </div>
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
                                        <Link
                                            href={
                                                "/utilities"
                                            }
                                        >
                                            کاربرد محصولات
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {/* list  */}

                                        <ul className="flex justify-center p-8 space-x-6 h-[70vh] w-[97vw] gap-x-6 text-primary  rtl:space-x-reverse  overflow-x-auto overflow-y-auto">
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
            <div className="flex justify-around items-start md:hidden p-2">
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
                            <DrawerHeader>منو</DrawerHeader>
                            <div className="flex flex-col gap-y-2 text-lg text-black">
                                <Accordion
                                    type="single"
                                    collapsible
                                >
                                    <Link href={"/aboutus"}>
                                        <AccordionItem value="about-us">
                                            درباره ی ما
                                        </AccordionItem>
                                    </Link>

                                    <AccordionItem value="utilities">
                                        <AccordionTrigger>
                                            <Link
                                                href={
                                                    "/utilities"
                                                }
                                            >
                                                کاربرد
                                                محصولات
                                            </Link>
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
                                            <Link
                                                href={
                                                    "/products"
                                                }
                                            >
                                                محصولات
                                            </Link>{" "}
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

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
    multiMedia,
    products,
    utilities,
} from "@/lib/constants";
