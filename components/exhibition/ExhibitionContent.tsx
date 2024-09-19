import React from "react";
import ExhibitionContentItem from "./ExhibitionContentItem";
import { FavoriteExhibitionItemProps } from "./FavoriteExhibitionItem";

interface ExhibitionContentProps {
    items: FavoriteExhibitionItemProps[];
}

const ExhibitionContent: React.FC<
    ExhibitionContentProps
> = ({ items }) => {
    return (
        <div className="grid w-full h-full px-4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <ExhibitionContentItem
                    key={item.link}
                    {...item}
                />
            ))}
        </div>
    );
};

export default ExhibitionContent;
