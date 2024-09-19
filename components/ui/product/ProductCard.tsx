import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Dynamically import icons to load only when needed
const Eye = dynamic(() =>
    import("lucide-react").then((mod) => mod.Eye)
);
const ShoppingCart = dynamic(() =>
    import("lucide-react").then((mod) => mod.ShoppingCart)
);
const Scale = dynamic(() =>
    import("lucide-react").then((mod) => mod.Scale)
);

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    originalPrice: string;
    discountedPrice: string;
    onSale?: boolean;
    filter: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    onSale,
    filter,
}) => {
    const isSingleRow = filter === "grid-rows-1";

    // Memoizing classNames to prevent recalculation on each render
    const containerClassName = useMemo(
        () =>
            cn(
                "font-iransans shadow-lg rounded-lg mx-auto my-4 relative overflow-hidden",
                isSingleRow
                    ? "flex items-center shadow-sm w-[90vw] h-[45vh]"
                    : "bg-white"
            ),
        [isSingleRow]
    );

    const imageWrapperClassName = useMemo(
        () =>
            cn(
                "relative",
                isSingleRow
                    ? "flex-shrink-0 w-7/12 h-full"
                    : "w-[80vw] md:w-[30vw] h-96"
            ),
        [isSingleRow]
    );

    const imageClassName = useMemo(
        () =>
            cn(
                "object-cover",
                isSingleRow
                    ? "h-full w-full rounded-r-lg"
                    : "w-[70vw] md:w-[45vw] xl:w-[22vw] h-[62vh]"
            ),
        [isSingleRow]
    );

    // Memoizing renderOverlayIcons to avoid unnecessary re-renders
    const renderOverlayIcons = useMemo(() => {
        const iconSizeClassName = isSingleRow
            ? "w-6 h-6"
            : "";

        return (
            <div className="absolute inset-0 flex justify-center items-center gap-x-4 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {[Scale, Eye, ShoppingCart].map(
                    (Icon, index) => (
                        <div
                            key={index}
                            className="bg-white p-2 md:p-3 xl:p-4 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300"
                        >
                            <Icon
                                className={cn(
                                    "w-2 h-2 md:w-4 md:h-4 xl:w-6 xl:h-6 text-gray-800",
                                    iconSizeClassName
                                )}
                            />
                        </div>
                    )
                )}
            </div>
        );
    }, [isSingleRow]);

    return (
        <div
            dir={isSingleRow ? "rtl" : undefined}
            className={containerClassName}
        >
            <div className={imageWrapperClassName}>
                <Image
                    fill
                    src={image}
                    alt={title}
                    className={imageClassName}
                    loading="lazy" // Lazy loading images for better performance
                />
                {renderOverlayIcons}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-400 line-through mr-2">
                        {originalPrice}
                    </span>
                    <span className="text-indigo-600 font-bold">
                        {discountedPrice}
                    </span>
                </div>
                {onSale && (
                    <span className="text-green-500 font-bold">
                        On Sale!
                    </span>
                )}
            </div>
        </div>
    );
};

// Memoize the component to avoid unnecessary re-renders
export default React.memo(ProductCard);
