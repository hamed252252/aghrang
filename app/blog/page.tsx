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
                "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1724873950~exp=1724877550~hmac=53fa9fba7de8b3814bf01937e275b3596035c986f9ec15ea6bdcb9923b4e25e5&w=1380",
        },
        {
            date: "03 فروردین 1403",
            title: "ببینید این همه از کجا متولد شده است",
            description:
                "آنچه گفته شد را به عنوان کاهوش حقیقت...",
            imageSrc:
                "https://lifearchitekture.com/cdn/shop/articles/masculine-features-of-man-973120.jpg?v=1710942494&width=1950",
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
