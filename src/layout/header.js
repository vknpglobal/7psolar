import React from 'react';
import { Grid, Row, Col, Navbar  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
const align = {
    display: 'inline-block',
    verticalAlign: 'middle',
}
const decorate = {
    fontSize: '1.5em',
    padding: '6px 9px',
    marginRight: 10,
    lineHeight: 1,
    color: '#6ab4e4',
    border: '2px solid #6ab4e4'
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={addClass: false}
    }

    componentDidMount(){
        let navOffset = document.getElementById('nav').offsetTop;
        window.addEventListener('scroll', (event) => {
            if(window.pageYOffset > navOffset ){
                this.setState({addClass: true})
            }else{
                this.setState({addClass: false})
            }
        });
    }

    render() {
        return (
            <header>
                <section className="top-nav wow slideInDown" >
                    <Grid className="show-grid">
                        <Row>
                            <Col sm={6} className="text-left">
                                <p><FontAwesomeIcon icon={['far', 'clock']} style={{ marginRight: 5 }} /> Opening Times: 10:00 AM to 8:00 PM</p>
                            </Col>
                            <Col sm={6} className="text-right">
                                <p>
                                    <span>Follow us:</span>
                                    <span className="social-links">
                                        <a href="https://www.facebook.com/7psolar" title="Facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                        <a href="https://twitter.com/7psolar" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                        <a href="https://plus.google.com/u/0/114801655442747336798" title="Google+"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
                                        <a href="https://www.linkedin.com/in/7psolar/" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="center-nav">
                    <Grid style={{ paddingTop: 40, paddingBottom: 40 }}>
                        <Row>
                            <Col sm={4}>
                                <Link to="/"><img src={require('../assets/images/solar-logo.svg')} alt="7PSOLAR Logo" /></Link>
                            </Col>
                            <Col sm={8} className="text-right">
                                <Row>
                                    <Col sm={6} className="wow zoomIn" data-wow-delay="0.5s" data-wow-duration="0.2s">
                                        <span style={{ ...align, ...decorate }}><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></span>
                                        <span className="address text-left" style={align}>+91 8168 0729 78, 9466 8466 34<br />info@7psolar.com</span>
                                    </Col>
                                    <Col sm={6} className="wow zoomIn" data-wow-delay="0.5s" data-wow-duration="0.4s">
                                        <span style={{ ...align, ...decorate }}><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></span>
                                        <span className="address text-left" style={align}>7P SOLAR , Plot no. 44, PKT-8, <br />Sector-24, Rohini, Delhi - 110086</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="main-nav wow fadeInUp" id="nav">
                    <Navbar className={this.state.addClass ? 'fix' : ''} collapseOnSelect style={{margin: 0, border: 'none'}}>
                        <Navbar.Header>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About US</Link></li>
                                <li><Link to="/">Knowledge Center</Link></li>
                                <li className="dropdown">
                                    <Link to="/" id="basic-nav-dropdown" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">Products <span className="caret"></span> </Link>
                                    <ul className="dropdown-menu" area-labeld-by="basic-nav-dropdown">
                                        <li><Link to="/">Solar PV Modules </Link></li>
                                        <li><Link to="/">Solar Street light</Link></li>
                                        <li><Link to="/">Solar LED Light</Link></li>
                                        <li><Link to="/">Solar Water heater</Link></li>
                                        <li><Link to="/">Solar Battery</Link></li>
                                        <li><Link to="/">Solar Structure</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Projects</Link></li>
                                <li><Link to="/About">Solution &amp; Services</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </section>
            </header>
        );
    }
}

export default Header;
