import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div>
            <div className="bg-base-300 py-12 rounded-lg">
                <div className="container mx-auto px-4 pl-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-white mb-8">Sign up for our entrepreneurship programs today and start building your dream business.</p>
                    <Link to={'/register'} className="bg-white text-base-300 font-bold py-2 px-6 rounded-full hover:bg-blue-100">Sign Up Now</Link>
                </div>
            </div>

        </div>
    );
};

export default CallToAction;