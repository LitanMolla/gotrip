const FAQCard = ({ faq, index, openIndex, toggleFAQ }) => {
    const { answer, question } = faq || {};
    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md">
            <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-5 flex items-center gap-6 focus:outline-none cursor-pointer">
                <div className="">
                    {openIndex === index ? (
                        <p className='text-2xl bg-gray-200 text-slate-800 shrink-0 w-8 h-8 flex items-center justify-center rounded-full'>-</p>
                    ) : (
                        <p className='text-xl bg-blue-900 shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-100'>+</p>
                    )}
                </div>
                <span className="font-medium text-gray-900 pr-4 text-left">{question}</span></button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</div>
            </div>
        </div>
    );
};
export default FAQCard