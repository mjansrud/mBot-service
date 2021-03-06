import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Nav from './components/parts/Navigation';
import Footer from './components/parts/Footer';
import '../assets/css/app.css';
import '../assets/css/frontpage.css';
import 'moment/locale/nb';
import Header from "./components/parts/Header";

class Frontpage extends Component {


    render() {

        return (
            <div className="page">
                <Nav />
                <Header title="Welcome to mBot" />
                <Grid className="grid">
                    <Row className="show-grid">
                        <Col sm={6} md={6} className="info-box-container">
                            <div className="info-box">
                                <div className="info-box-image-container">
                                    <img className="info-box-image" role="presentation" src={"https://www.google.com/intl/hi/analytics/images/feat-hed-mobile.png"} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} className="info-box-container">
                            <div className="info-box">
                                <div className="sub-title">
                                    <h4>Automated trading bots</h4>
                                </div>
                                <hr/>
                                <p>
                                    Fully automate your strategies through mBot. mBot is a crypto-currency trading bot
                                    which creates unique instances for every user that can be configured to trade 24/7 based
                                    on advanced parameters made simple.
                                </p>
                                <p>
                                    mBots supports testing of your strategies by collecting historical trades and running a simulation.
                                    The service is currenrly in development and is therefore free to use on your own risk.
                                </p>
                                <p>
                                    Poloniex is the only supported exchange at the moment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <div className="exchange-container">
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Frontpage;
