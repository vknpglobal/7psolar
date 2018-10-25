import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from "../../assets/images/services.jpg";

const styles={
    background: 'url("'+ bg +'")',
    backgroundPosition: 'right top',
    backgroundSize: 'cover'
}
class Services extends React.Component {
    render() {
        return (
            <section className="section services" style={styles}>
                <Grid>
                    <Row>
                        <Col md={6} mdOffset={6}>
                            <div className="wow fadeInDown">
                                <div className="section-head">
                                    <h2>Services we provide</h2>
                                </div> 
                                <p>7P Solar committed for values, our work doesn’t stop when the project ends. We offer full-service maintenance support and emergency support through our skilled 24/7 Service Department. Our service vehicles are equipped with the latest tools and technologies to quickly mobilize and respond to calls day or night.</p>
                            </div>
                            <Row>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Project Feasibility Consultation</div>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.2s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Financial Consultation</div>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.4s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Project Design</div>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.6s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Project Installation</div>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.8s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Project Commissioning</div>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6}>
                                    <div className="service-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="1s">
                                        <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                        <div className="service-name">Operation &amp; Maintenance Training</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Services;