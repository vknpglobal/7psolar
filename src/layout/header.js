import React from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem , NavDropdown , MenuItem,  } from 'react-bootstrap';
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
                                <a href="www.7psolar.com"><img src={require('../assets/images/solar-logo.svg')} alt="7PSOLAR Logo" /></a>
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
                            <Nav>
                                <NavItem eventKey={1} href="#">Home</NavItem>
                                <NavItem eventKey={2}><Link to="/about">About Us</Link></NavItem>
                                
                                <NavItem eventKey={3} href="#">Knowledge Center</NavItem>
                                <NavDropdown eventKey={4} title="Products" id="basic-nav-dropdown">
                                    <MenuItem eventKey={4.1}>Solar PV Modules </MenuItem>
                                    <MenuItem eventKey={4.2}>Solar Street light</MenuItem>
                                    <MenuItem eventKey={4.3}>Solar LED Light</MenuItem>
                                    <MenuItem eventKey={4.4}>Solar Water heater</MenuItem>
                                    <MenuItem eventKey={4.5}>Solar Battery</MenuItem>
                                    <MenuItem eventKey={4.6}>Solar Structure</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={5} href="#">Projects</NavItem>
                                <NavItem eventKey={6} href="#">Solution &amp; Services</NavItem>
                                <NavItem eventKey={7} href="#">Contact Us</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </section>
            </header>
        );
    }
}

export default Header;
