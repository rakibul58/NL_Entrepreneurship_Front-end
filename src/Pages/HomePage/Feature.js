import React from 'react';

const Feature = () => {
    return (
        <div>
            <div className="text-white">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                            <div className="rounded-lg shadow-2xl border p-6 h-full">
                                <h3 className="text-xl font-bold mb-2">Entrepreneurship Programs</h3>
                                <p className="leading-snug">Our programs provide students with the knowledge, skills, and resources they need to start and grow successful businesses.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                            <div className="rounded-lg shadow-2xl border p-6 h-full">
                                <h3 className="text-xl font-bold mb-2">Mentorship and Coaching</h3>
                                <p className="leading-snug">Our experienced mentors and coaches provide guidance and support to help students achieve their entrepreneurial goals.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                            <div className="rounded-lg shadow-2xl border p-6 h-full">
                                <h3 className="text-xl font-bold mb-2">Networking Opportunities</h3>
                                <p className="leading-snug">Our events and programs connect students with like-minded entrepreneurs and industry experts, allowing them to build valuable relationships and partnerships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;