import React from 'react';
import { Grid, Row, Col, Media  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/images/solar-logo.svg";



class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={addClass: false}
    }
    componentDidMount(){
        window.addEventListener('scroll', (event) => {
            if(window.pageYOffset > 100 ){
                this.setState({addClass: true})
            }else{
                this.setState({addClass: false})
            }
        });
    }
    scrollTop(){
        window.scrollTo({top: 0,behavior: 'smooth'});
    }
    render() {
        return (
            <footer>
                <Grid className="wow fadeInUp">
                    <Row>
                        <Col md={6} sm={6}>
                            <img src={logo} alt="Logo" />
                            <p style={{margin: '10px 0 30px'}}>7P SOLAR is a renewable energy company providing clean energy solutions to residential and other industry sectors in India.</p>
                            <p>
                                <span className="social-links">
                                    <a href="https://www.facebook.com/7psolar" title="Facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                    <a href="https://twitter.com/7psolar" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                    <a href="https://plus.google.com/u/0/114801655442747336798" title="Google+"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
                                    <a href="https://www.linkedin.com/in/7psolar/" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                </span> 
                            </p>
                        </Col>
                        <Col md={6} sm={6}>
                            <h4>Contact Us</h4>
                            <Media>
                                <Media.Left>
                                    <FontAwesomeIcon className="icon" icon={['fas', 'map-marker-alt']} />
                                </Media.Left>
                                <Media.Body>
                                    <p>Plot no. 44, PKT-8, Sector-24, Rohini, Near DE Public School, Delhi-110085</p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Left>
                                    <FontAwesomeIcon className="icon" icon={['fas', 'phone']} />
                                </Media.Left>
                                <Media.Body>
                                    <p>+91 - 8168 0729 78, 9999 8108 94</p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Left>
                                    <FontAwesomeIcon className="icon" icon={['fas', 'envelope']} />
                                </Media.Left>
                                <Media.Body>
                                    <p>
                                        <a href="mailto:info@7psolar.com">info@7psolar.com</a> | <a href="mailto:sales@7psolar.com">sales@7psolar.com</a>
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <div className="copyright text-center text-uppercase">
                        &copy; 7psolar.com | <a href="https://trickyui.blogspot.in/">TrickyUI - <small>Tricks in a box</small></a>
                    </div>
                </Grid>
                <a href="#" className={this.state.addClass ? "scroll-top show" : "scroll-top"} onClick={this.scrollTop.bind(this)}><FontAwesomeIcon icon={['fas', 'arrow-alt-circle-up']} /></a>
            </footer>
        );
    }
}

export default Footer;
