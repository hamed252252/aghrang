"use client";
import React, {
    useState,
    useMemo,
    useCallback,
} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";

// Dynamically import ImageSlider and preload on interaction
const ImageSlider = dynamic(() => import("./ImageSlider"), {
    ssr: false,
    loading: () => <p>Loading slider...</p>,
});

// Images array
const images = [
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+1",
        text: "این متن برای تصویر اول است.",
    },
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+2",
        text: "این متن برای تصویر دوم است.",
    },
    {
        url: "https://via.placeholder.com/300x200.png?text=Image+3",
        text: "این متن برای تصویر سوم است.",
    },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<
        number | null
    >(null);
    const [isSliderPreloaded, setIsSliderPreloaded] =
        useState(false);

    // Preload ImageSlider when the user interacts with any image
    const preloadSlider = useCallback(() => {
        if (!isSliderPreloaded) {
            import("./ImageSlider");
            setIsSliderPreloaded(true);
        }
    }, [isSliderPreloaded]);

    // Render images using memoization
    const renderedImages = useMemo(
        () =>
            images.map((image, index) => (
                <div
                    key={index}
                    className="cursor-pointer rounded-md p-3"
                    onClick={() => setSelectedImage(index)}
                    onMouseEnter={preloadSlider} // Preload on hover
                >
                    <div className="border rounded-md p-2">
                        <div className="relative w-full aspect-[3/2]">
                            <Image
                                src={image.url}
                                alt={`Gallery image ${
                                    index + 1
                                }`}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                priority={index < 2} // Priority for first two images
                                fill
                                loading={
                                    index < 2
                                        ? "eager"
                                        : "lazy"
                                } // Lazy load after first two
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="mt-2">
                            <h1 className="text-center text-xl text-black">
                                عنوان نمونه کارها
                            </h1>
                            <p className="text-center font-semibold text-gray-500">
                                {image.text}
                            </p>
                        </div>
                    </div>
                </div>
            )),
        [preloadSlider]
    );

    // Close the slider
    const closeSlider = useCallback(
        () => setSelectedImage(null),
        []
    );

    return (
        <>
            <Head>
                {/* Preconnect to external resources */}
                <link
                    rel="preconnect"
                    href="https://via.placeholder.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
            </Head>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-iransans my-10">
                {renderedImages}

                {selectedImage !== null && (
                    <ImageSlider
                        images={images}
                        selectedImage={selectedImage}
                        closeSlider={closeSlider}
                    />
                )}
            </div>
        </>
    );
};

export default Gallery;
