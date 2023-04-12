import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import CallToAction from './CallToAction';
import Testmonial from './Testmonial';
import FAQSection from './FAQSection';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <div className='my-40'> 
                <Feature />
            </div>
            <div className='my-40'> 
                <CallToAction/>
            </div>
            <div className='my-40'> 
                <Testmonial/>
            </div>
            <div className='my-40'> 
                <FAQSection/>
            </div>
        </div>
    );
};

export default HomePage;
