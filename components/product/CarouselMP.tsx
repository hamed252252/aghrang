"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    useCarousel,
} from "@/components/Carousel";

function CarouselMP({
    imagePaths,
}: {
    imagePaths: string[];
}) {
    const ITEMS = imagePaths;

    const { index, setIndex, itemsCount } = useCarousel();

    return (
        <>
            <CarouselContent className="relative">
                {ITEMS.map((item, idx) => (
                    <CarouselItem
                        key={idx}
                        className=""
                    >
                        <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                            <img
                                src={item}
                                alt={`Slide ${idx + 1}`}
                                className="object-contain w-full h-auto max-h-[36rem]" // Increased size to 36rem
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex w-full justify-center space-x-4 px-4 mt-6">
                {ITEMS.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        aria-label={`Go to slide ${
                            idx + 1
                        }`}
                        onClick={() => setIndex(idx)}
                        className={`h-24 w-24 border border-zinc-200 dark:border-zinc-800 ${
                            idx === index
                                ? "opacity-100"
                                : "opacity-50"
                        }`} // Further increased size for indicators
                    >
                        <img
                            src={ITEMS[idx]}
                            alt={`Indicator ${idx + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </>
    );
}

export default function CarouselCustomIndicator({
    imagePaths,
}: {
    imagePaths: string[];
}) {
    return (
        <div
            dir="ltr"
            className="relative w-full max-w-lg py-10" // Increased max width and padding
        >
            <Carousel>
                <CarouselMP imagePaths={imagePaths} />
            </Carousel>
        </div>
    );
}
