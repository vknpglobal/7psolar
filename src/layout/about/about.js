import React from 'react';
import Breadcrumb from '../breadcrumb';
import { Grid, Row, Col } from 'react-bootstrap';
import aboutImg from '../../assets/images/who-we-are.jpg';

class About extends React.Component{
    render(){
        return(
            <main>
                <Breadcrumb name="About Us"/>
                <section className="section">
                    <Grid>
                        <Row>
                            <Col lg={5} md={6}>
                                <img src={aboutImg} alt="Who we are" className="img-responsive" />
                            </Col>
                            <Col lg={7} md={6} className="text-left">
                                <div className="section-head plain">
                                    <h2>Who we are</h2>
                                </div>
                                <p>7P Solar is a renewable energy company providing clean energy solutions to residential and other industry sectors in India. We are one of the pioneers in developing various alternate energy solutions Based on solar resources. Our products and are designed to meet various applications and energy demands of the customers. We provide cost effective end to end solutions in the areas of energy audits, consultancy services, supply , system integration, energy tracking and monitoring , Trunkey EPC solution, PPA.</p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
           </main>
        );
    }
}

export default About;