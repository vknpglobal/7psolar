import React from 'react';
import Breadcrumb from '../breadcrumb';
import { Grid, Row, Col } from 'react-bootstrap';
import aboutImg from '../../assets/images/who-we-are.jpg';

const Team = () => {
    return (
        <Grid>
            <div className="wow fadeInDown text-center" data-wow-duration="0.5s">
                <div className="section-head mt-100">
                    <h2>Our Team</h2>
                </div>
            </div>
            <div className="team text-center">
                <p>Vikas Chauhan is the Founder & CEO of 7P Solar. He specialises in building businesses, project development, investment management and project finance in the energy sector. Vikas led the business development team for many venture Partner in India. Vikas is trained as a entrepreneur, with an MBA degree from IIPM, Delhi.</p>
                <h2 className="text-uppercase">VIKAS CHAUHAN - FOUNDER & CEO</h2>
            </div>
            <div className="team text-center">
                <p>Neelam Mann is Director of 7P Solar. Her decade long experience in setup of commercial Solar PV power plants. She has experience in working with state Nodal Agency of Delhi. After that she worked and got experienced like Tapan Solar Pvt. Ltd., Hygrid Solar and Blue bird solar Pvt. Ltd. in Design & Engineering Departments. She is dynamic and innovative in his approach. She Hold B.Tech from Jhansi.</p>
                <h2 className="text-uppercase">NEELAM MANN - DIRECTOR</h2>
            </div>
            <div className="team text-center">
                <p>Sandeep Beniwal is Director of 7P Solar. He is equally passionate about clean energy technologies and envisions solar energy as the answer to India’s ever increasing energy needs. Sandeep Beniwal is a subject matter expert of solar technologies with a decade long experience in setup of commercial Solar PV power plants and PV module manufacturing process. He focuses on strategic planning, project head and business development.</p>
                <h2 className="text-uppercase">SANDEEP BANIWAL – DIRECTOR</h2>
            </div>
        </Grid>
    );
};

const VisionMision = () => {
    const partners = () => {
        let num = [ 
            {imagename: '1', alt: "WLU Energy"},
            {imagename: '2', alt: "Akshat"},
            {imagename: '3', alt: "Evincive"},
            {imagename: '4', alt: "MR Solar"},
            {imagename: '5', alt: "Solarway"}
        ];
        
        let newArray = num.map( item =>{
            return (
                <Col md={4} sm={4} xs={6}>
                    <div className="partner-box"><img src={require('../../assets/images/'+item.imagename+'.png')} alt={item.alt}/></div>
                </Col>
            );
        });
        return newArray;
    }
    return (
        <Grid>
            <div className="text-center">
                <div className="wow fadeInDown text-center" data-wow-duration="0.5s">
                    <div className="section-head mt-100">
                        <h2>Vision & Mission</h2>
                    </div>
                </div>
                <p>Our Purpose and Mission: Our purpose is fulfilled through our mission: To create an exceptional customer experience. We will perpetuate our business for future generations and support the communities in which we live and work.</p>
            </div>
            <div className="text-center">
                <div className="wow fadeInDown text-center" data-wow-duration="0.5s">
                    <div className="section-head mt-100">
                        <h2>OUR PRESENCE & NETWORK</h2>
                    </div>
                </div>
                <p>Our present network includes various Project Developers and System Integrators throughout India along with a separate retail & distribution channel throughout North India. Our focus is on expanding our operations to PAN India by year…. end this with dedicated application and service support throughout our network.</p>
            </div>
            <div className="text-center">
                <div className="wow fadeInDown text-center" data-wow-duration="0.5s">
                    <div className="section-head mt-100">
                        <h2>OUR ALLIENCE & PARTNERS</h2>
                    </div>
                </div>
                <Row>
                    {partners()}
                </Row>
            </div>
        </Grid>
    );
};

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
                    <Team />
                    <VisionMision/>
                </section>
               
           </main>
        );
    }
}

export default About;