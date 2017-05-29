import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './components/parts/Nav';
import Footer from './components/parts/Footer';
import Header from './components/parts/Header';

class Settings extends Component {

    render() {

        return (
            <div>
                <Nav />
                <Header title="Settings" />
                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <h2>Go to frontpage</h2>
                        <Link className="btn btn-lg btn-success" to='/'>Frontpage</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Settings;
