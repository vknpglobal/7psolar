import React from 'react';
import Banner from './home/banner'
import WhatWeAre from './home/whatWeAre';
import Services from './home/services';
import WhyChooseUs from './home/whyChooseUs';
import Testimonials from './home/testimonials';

class Home extends React.Component {

    render() {
        return (
            <main>
                <Banner />
                <WhatWeAre />
                <Services />
                <WhyChooseUs />
                <Testimonials />
            </main>
        );
    }
}

export default Home;
