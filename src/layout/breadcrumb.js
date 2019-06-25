import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Breadcrumb extends React.Component {

    render() {
        return (
            <section className="breadcrumbs">
                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="section-head">
                                <h2>{this.props.name}</h2>
                            </div>
                        </Col>
                        <Col md={6}>
                            <ol className="breadcrumb text-right">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">{this.props.name}</li>
                            </ol>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Breadcrumb;