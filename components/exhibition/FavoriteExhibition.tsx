import React from "react";
import { Separator } from "../ui/separator";
import FavoriteExhibitionItem, {
    FavoriteExhibitionItemProps,
} from "./FavoriteExhibitionItem";
import ExhibitionContent from "./ExhibitionContent";

export const favoriteExhibitionItems: FavoriteExhibitionItemProps[] =
    [
        {
            title: "Modern Art Expo 2024",
            date: "2024-02-15",
            src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2023/10/%D8%B4%D8%AE-2.jpg",
            link: "/",
        },
        {
            title: "Tech Innovators 2023",
            date: "2023-11-10",
            src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2023/10/%D8%B4%D8%AE-2.jpg",
            link: "/",
        },
        {
            title: "Sculpture Biennale",
            date: "2023-08-05",
            src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2023/10/%D8%B4%D8%AE-2.jpg",
            link: "/",
        },
        {
            title: "Contemporary Design Fair",
            date: "2023-10-20",
            src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2023/10/%D8%B4%D8%AE-2.jpg",
            link: "/",
        },
        {
            title: "Photography World Expo",
            date: "2023-12-18",
            src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2023/10/%D8%B4%D8%AE-2.jpg",
            link: "/",
        },
    ];

function FavoriteExhibition() {
    return (
        <section className="hidden md:flex flex-col items-center p-4 my-4 border border-slate-200 rounded-sm shadow-sm font-iransans">
            <div className="flex gap-x-2">
                <span className="text-slate-300">
                    برگزیده
                </span>
                <span>نمایشگاه</span>
            </div>
            <Separator className="my-2 bg-green-400" />
            <div className="grid grid-cols-1 gap-y-2">
                {favoriteExhibitionItems.map((item) => (
                    <FavoriteExhibitionItem
                        key={item.date}
                        link={item.link}
                        title={item.title}
                        date={item.date}
                        src={item.src}
                    />
                ))}
            </div>
        </section>
    );
}

export default FavoriteExhibition;
