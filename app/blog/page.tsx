import React from "react";
import Card from "@/components/blog/Card";
import Header from "@/components/blog/Header";

const Home: React.FC = () => {
    const cardData = [
        {
            date: "02 فروردین 1403",
            title: "ببینید این همه از کجا متولد شده است",
            description:
                "آنچه گفته شد را به عنوان کاهوش حقیقت...",
            imageSrc:
                "https://cdn.pixabay.com/photo/2020/09/16/15/05/man-5576603_640.jpg",
        },
        {
            date: "03 فروردین 1403",
            title: "ببینید این همه از کجا متولد شده است",
            description:
                "آنچه گفته شد را به عنوان کاهوش حقیقت...",
            imageSrc:
                "https://cdn.pixabay.com/photo/2017/03/27/12/59/adult-2178560_1280.jpg",
        },
        // Add more card data as needed
    ];

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-iransans">
            <Header />
            <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        date={card.date}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                    />
                ))}
            </main>
        </div>
    );
};

export default Home;
