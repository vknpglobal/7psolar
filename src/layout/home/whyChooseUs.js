import React from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WhyChooseUs extends React.Component {
    render() {
        return (
            <section className="section why-choose">
                <Grid>
                    <div className="wow fadeInDown" data-wow-duration="0.5s">
                        <div className="section-head">
                            <h2>WHY CHOOSE US</h2>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="wow fadeInDown" data-wow-duration="0.5s">
                                <p>7P solar active in regions of Delhi, Uttar Pradesh, Punjab, Rajasthan, Haryana and Maharashtra which are ripe markets for roof top solar. To become our EPC partner and receive leads in your region, send us your query and we will contact you within the next 48 hours. We look forward to doing great business with you and to help you get a better share in the market. There is no monetary cost associated with partnering with us.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <Media className="wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.2s">
                                <Media.Left>
                                    <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading className="text-uppercase">Reduced Acquisition Costs</Media.Heading>
                                    <p>Get closed leads helping you reduce sales costs by up to 90%. Increase the number of projects you do per month.</p>
                                </Media.Body>
                            </Media>
                            <Media className="wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.4s">
                                <Media.Left>
                                    <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading className="text-uppercase">Benifits from volume discounts</Media.Heading>
                                    <p>We have rate contracts with component manufacturers in India and abroad to procure at low rates and offer to you.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md={4}>
                            <Media className="wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.6s">
                                <Media.Left>
                                    <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading className="text-uppercase">Access our investor network</Media.Heading>
                                    <p>We have tied with a network of Investors who would be happy to invest in projects where you need them.</p>
                                </Media.Body>
                            </Media>
                            <Media className="wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.8s">
                                <Media.Left>
                                    <FontAwesomeIcon icon={['far','lightbulb']} className="icon" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading className="text-uppercase">Grow your EPC portfolio</Media.Heading>
                                    <p>Get leads from 7psolar periodically, helping you grow your portfolio faster and becoming a trusted name.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default WhyChooseUs;