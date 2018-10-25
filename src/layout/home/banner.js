import React from 'react';
import { Carousel  } from 'react-bootstrap';

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indicators: false,
            controls: false
        };
    }
    render() {
        const { indicators, controls } = this.state;
        return (
            <section className="banner">
                <Carousel indicators={indicators} controls={controls}>
                    <Carousel.Item>
                        <img src={require('../../assets/images/banner1.jpg')} alt="Banner 1" />
                        <Carousel.Caption>
                            <h2 className="text-uppercase">ENERGY WITH A SPARKING TOMORROW</h2>
                            <p>Never – ending, Non-polluting renewable source of energy. Available during most part of the day in abundance, and the energy can be stored for later use. Cleaner Alternative to Diesel, Coal, Thermal and Kerosene. Contributes directly to tackle the problem of Global Warming and Climatic Changes as every solar system saves some amount of CO2 emission, which otherwise would have resulted from conventional resources.</p>
                            <a href="#" className="button">Read more</a>
                            <div className="corner"></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        )
    }
}

export default Banner;