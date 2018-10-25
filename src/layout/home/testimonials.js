import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import bg from "../../assets/images/testimonials.jpg";
import smile from "../../assets/images/smile.png";


const styles={
    background: 'url("'+ bg +'")',
    backgroundPosition: 'right top',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}
class Testimonials extends React.Component {

    render() {
        return (
            <section className="section testimonials" style={styles}>
                <Grid className="text-center">
                    <div className="wow fadeInDown" data-wow-duration="0.5s">
                        <div className="section-head text-center">
                            <h2>Client's Testimonials</h2>
                        </div>
                    </div>
                    <Row>
                        <Col md={4} sm={6}>
                            <div className="testimonial-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.2s">
                                <img src={smile} alt="smile" />
                                <p>Really glad to work with 7P Solar. The products are of good quality. Team is very co-operating and supporting. I am looking forward for a long term business relation with them.</p>
                                <hr />
                                <h5>DR. JITENDRA MANN</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="testimonial-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.4s">
                                <img src={smile} alt="smile" />
                                <p>Undoubtedly 7P Solar is among the best solar companies in Delhi NCR in the field of Solar Energy also having very helpful employees, good working style with Excellent Service &amp; Quality Products that too affordable . I strongly suggest "7P Solar" for all Solar Projects.</p>
                                <hr />
                                <h5>MR. RAJENDER</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="testimonial-box wow zoomIn" data-wow-duration="0.4s" data-wow-delay="0.6s">
                                <img src={smile} alt="smile" />
                                <p>Hearty wishes to you all in 7p Solar well. At the same time having installed the power plant. Oh! My phenomenal jump and good annual result. God bless the entire team of performance and give you more energy in bringing the solar energy into noble use.</p>
                                <hr />
                                <h5>MR. JOGINDER</h5>
                            </div>
                        </Col>
                    </Row>  
                </Grid>
            </section>
        )
    }
}

export default Testimonials;