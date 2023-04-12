import { useState } from 'react';

function FAQAccordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800 shadow-lg rounded-lg mb-4">
            <button
                className="w-full border text-left py-3 px-4 font-bold text-white bg-base-300 hover:bg-gray-700 focus:outline-none rounded-lg"
                onClick={toggleAccordion}
            >
                {title}
                <svg className={`w-4 h-4 ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10.5L3.5 6L4.5 5L8 8.5L11.5 5L12.5 6L8 10.5Z" fill="currentColor" />
                </svg>
            </button>
            {isOpen && (
                <div className="bg-gray-400 p-3">
                    <p className="text-gray-100">{content}</p>
                </div>
            )}
        </div>
    );
}

function FAQSection() {
    return (
        <div className="bg-base-200 rounded-lg">
            <div className="container mx-auto p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-col">
                    <FAQAccordion
                        title="What is the entrepreneurship program?"
                        content="The entrepreneurship program is a national-level program designed to provide students with the skills and resources needed to start their own businesses."
                    />
                    <FAQAccordion
                        title="Who can participate in the program?"
                        content="The program is open to students from all disciplines and backgrounds who have a passion for entrepreneurship and innovation."
                    />
                    <FAQAccordion
                        title="How long is the program?"
                        content="The program runs for 12 weeks, with weekly online classes and regular mentoring sessions."
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;