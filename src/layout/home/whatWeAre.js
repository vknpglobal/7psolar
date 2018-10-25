import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from "../../assets/images/bg-1.jpg";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";


class WhatWeAre extends React.Component {
   /* list=[
        {
            id: 1,
            name: "one"
        },
        {
            id: 2,
            name: "two"
        },
        {
            id: 3,
            name: "three"
        },
        {
            id: 4,
            name: "four"
        }
    ];

    generateList = (items)=>{

        return (
            items.map( (item)=>{

              return <li key= {item.id} id= {item.id} >{item.name}</li>

            } )
        );

    }*/

    
    render() {
        return (
            <section className="section what-we-are">
                <Grid className="text-center">
                    <div className="wow fadeInDown" data-wow-duration="0.5s">
                        <div className="section-head">
                            <h2>What we Are</h2>
                        </div>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <p><em>Solar plant has becoming attractive as the grid electricity prices are increasing. In the Solar Industry, rooftop solar is the most practical solution of dealing with an increasing power tariff. Net-metering has also made it easy to feed-back excess electricity to the grid. There is also solar subsidy available from MNRE for solar for homes, residential complexes, solar for schools, solar for colleges and universities.</em></p>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={4} sm={6} style={{ margin: '10px 0' }}>
                            <div className="card text-center wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.2s" style={{ marginTop: 25, backgroundImage: 'url("' + bg1 + '")' }}>
                                <div className="card-body">
                                    <FontAwesomeIcon className="icon" icon={['fas', 'solar-panel']} />
                                    <h3 className="card-name">Water Heater</h3>
                                    <hr />
                                    <p>Hot water is an important requirement for every family. Water heater is hot water system products are a perfect alternative to electrically heated hot water. We are able to deliver the same...</p>
                                    <a href="#" className="button">Read More</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} style={{ margin: '10px 0' }}>
                            <div className="card text-center wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.4s" style={{ marginTop: 25, backgroundImage: 'url("' + bg2 + '")' }}>
                                <div className="card-body">
                                    <FontAwesomeIcon className="icon" icon={['fas', 'solar-panel']} />
                                    <h3 className="card-name">Street Light</h3>
                                    <hr />
                                    <p>Solar Energy, we fulfill the needs of high-quality durable solar energy street lights. Our solar lights are designed for outdoor purposes for un-electrified remote rural area and urban solar...</p>
                                    <a href="#" className="button">Read More</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} style={{ margin: '10px 0' }}>
                            <div className="card text-center wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.6s" style={{ marginTop: 25, backgroundImage: 'url("' + bg3 + '")' }}>
                                <div className="card-body">
                                    <FontAwesomeIcon className="icon" icon={['fas', 'solar-panel']} />
                                    <h3 className="card-name">Water Pump</h3>
                                    <hr />
                                    <p>7P Solar offers solar-powered water pumping solutions to meet irrigation and drinking water needs in off-grid rural areas. The company offers the entire spectrum of solar pumping solutions, ranging...</p>
                                    <a href="#" className="button">Read More</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                   {/*
                        {this.generateList(this.list)}
                    </ul>
                   */}
                </Grid>
            </section>
        )
    }
}

export default WhatWeAre;