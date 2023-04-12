import React from 'react';

const Testmonial = () => {
    return (
        <div>
            <div className="">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
                    <div className="flex flex-wrap -mx-4 text-white">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="rounded-lg shadow-2xl bg-base-300 p-6 h-full">
                                <p className="leading-snug">"The entrepreneurship program gave me the skills and confidence I needed to start my own business. The mentors were incredibly helpful and supportive throughout the entire process."</p>
                                <p className=" font-bold mt-4">Jane Doe</p>
                                <p className="">Founder, XYZ Company</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="rounded-lg shadow-2xl bg-base-300 p-6 h-full">
                                <p className="leading-snug">"I was blown away by the quality of the entrepreneurship program. The curriculum was comprehensive and well-designed, and the mentors were truly invested in my success."</p>
                                <p className="font-bold mt-4">John Smith</p>
                                <p className="">Co-founder, ABC Startup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testmonial;