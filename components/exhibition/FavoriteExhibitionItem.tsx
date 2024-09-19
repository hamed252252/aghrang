import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

export type FavoriteExhibitionItemProps = {
    title: string;
    date: string;
    src: string;
    link: string;
    comments?: string;
};

function FavoriteExhibitionItem({
    src,
    date,
    title,
    link,
    comments,
}: FavoriteExhibitionItemProps) {
    return (
        <Link href={link}>
            <div
                dir="ltr"
                className=" hidden md:flex relative mb-10   "
            >
                <Image
                    src={src}
                    alt="Exhibition Image"
                    width={210}
                    height={210}
                    className=" "
                />
                <div className="flex flex-col px-2 justify-center items-center">
                    <span className=" font-bold">
                        {title}
                    </span>

                    <span className=" text-slate-400  self-end justify-self-end">
                        {date}
                    </span>
                </div>
            </div>
            <Separator className="w-full my-2" />
        </Link>
    );
}

export default FavoriteExhibitionItem;
