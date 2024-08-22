import dynamic from "next/dynamic";

// Dynamically import the Faq component with no SSR
const Faq = dynamic(() => import("@/components/Faq"), {
    ssr: false,
});

const FaqPage = () => {
    return <Faq />;
};

export default FaqPage;
