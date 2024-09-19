"use client";
import React, { useState } from "react";
import { FavoriteExhibitionItemProps } from "./FavoriteExhibitionItem";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Separator } from "../ui/separator";

const ExhibitionContentItem: React.FC<
    FavoriteExhibitionItemProps
> = ({ src, date, title, link }) => {
    const [isHovered, setIsHoverd] = useState(false);
    return (
        <div className="flex h-fit hover:shadow-md flex-col items-center justify-start  shadow-sm my-1 rounded-md p-2 font-iransans">
            <Link
                href={link}
                className="relative w-full h-64"
            >
                <Image
                    onMouseEnter={() => setIsHoverd(true)}
                    onMouseLeave={() => setIsHoverd(false)}
                    src={src}
                    alt={title}
                    fill
                    className="object-cover w-full h-full hover:blur-[2px] transition-all ease-in-out duration-500"
                />
                {isHovered && (
                    <>
                        <MessageCircle className="absolute bottom-4 stroke-white left-[50%] " />
                        <p className="absolute text-white left-[30%] bottom-4">
                            بدون نظر
                        </p>
                    </>
                )}
            </Link>
            <p className="mt-4 text-xl font-bold text-center">
                {title}
            </p>
            <p className="text-center text-gray-500">
                {date}
            </p>
            <Separator className="h-0.5 w-16 my-2 bg-green-400" />
        </div>
    );
};

export default ExhibitionContentItem;
