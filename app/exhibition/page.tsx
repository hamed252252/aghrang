import ExhibitionContent from "@/components/exhibition/ExhibitionContent";
import ExhibitionHeader from "@/components/exhibition/ExhibitionHeader";
import FavoriteExhibition, {
    favoriteExhibitionItems,
} from "@/components/exhibition/FavoriteExhibition";
import React from "react";

function page() {
    return (
        <div className="flex flex-col">
            <ExhibitionHeader src="https://agrofood-irantradefair.ir/wp-content/uploads/2023/12/csm_IMG_20230616_084558_e76ff78184.jpg" />
            <div className="flex">
                <FavoriteExhibition />
                <ExhibitionContent
                    items={favoriteExhibitionItems}
                />
            </div>
        </div>
    );
}

export default page;
