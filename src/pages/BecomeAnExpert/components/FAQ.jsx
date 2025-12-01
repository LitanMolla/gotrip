import { useState } from "react";
import FAQCard from "./FAQCard";
import faqs from "../../../lib/data/faqs";
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return (
        <div className="my-15 lg:my-30">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions </h1>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <FAQCard key={index} faq={faq} index={index} openIndex={openIndex} toggleFAQ={toggleFAQ}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;