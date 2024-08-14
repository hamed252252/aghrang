import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { NextPage } from "next";

interface FAQ {
    question: string;
    answer: string;
}

const defaultFaqs: FAQ[] = [
    {
        question: "کالرپروداکشن چیست؟",
        answer: "کالرپروداکشن شرکتی است که در زمینه ارائه راه‌حل‌های رنگی با کیفیت بالا در صنایع مختلف از جمله چاپ و رسانه‌های دیجیتال تخصص دارد.",
    },
    {
        question: "دفتر مرکزی شما کجاست؟",
        answer: "دفتر اصلی ما در قلب سیلیکون ولی واقع شده است، با شعب متعدد در سراسر جهان.",
    },
    {
        question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
        answer: "شما می‌توانید با ایمیل support@colorproduction.com یا با شماره تلفن 1-800-555-1234 با تیم پشتیبانی ما تماس بگیرید.",
    },
];

const Faq: NextPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-5 text-right font-iransans">
            <h1 className="text-3xl font-bold mb-8">
                پرسش‌های متداول
            </h1>
            <Accordion
                type="single"
                collapsible
                className="w-full"
            >
                {defaultFaqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                    >
                        <AccordionTrigger className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faq;
