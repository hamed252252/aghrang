"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    const [activeIndex, setActiveIndex] = useState<
        number | null
    >(null);

    const handleAccordionToggle = (index: number) => {
        setActiveIndex(
            activeIndex === index ? null : index
        );
    };

    return (
        <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-24  my-4 text-right font-iransans bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-md">
            <motion.h1
                className="text-4xl font-extrabold mb-10 text-purple-700 dark:text-purple-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                پرسش‌های متداول
            </motion.h1>
            <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
            >
                {defaultFaqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.4,
                        }}
                    >
                        <AccordionItem
                            value={`item-${index}`}
                            className="border-b last:border-none dark:border-gray-700"
                        >
                            <AccordionTrigger
                                onClick={() =>
                                    handleAccordionToggle(
                                        index
                                    )
                                }
                                className={`text-xl font-semibold flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ${
                                    activeIndex === index
                                        ? "text-purple-600 dark:text-purple-400"
                                        : "text-gray-900 dark:text-gray-100"
                                }`}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="overflow-hidden">
                                <motion.div
                                    initial={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    animate={
                                        activeIndex ===
                                        index
                                            ? {
                                                  height: "auto",
                                                  opacity: 1,
                                              }
                                            : {
                                                  height: 0,
                                                  opacity: 0,
                                              }
                                    }
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="text-gray-600 dark:text-gray-300 pt-2 leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </div>
    );
};

export default Faq;
