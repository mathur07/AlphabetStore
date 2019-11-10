import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/popper.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom'
import Controller from './controller';
import Addbook from './addbook';

class Navbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                        <Link to={'/'} className="navbar-brand" >ReactPage</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/all'} className="nav-link">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/bestseller'} className="nav-link" >BestSeller</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/addbook'} className="nav-link">AddBook</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid mt-4 pt-5"></div>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/all" component={Controller} />
                        <Route path="/bestseller" component={BestSeller} />
                        <Route path="/addbook" component={Addbook} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }

}

class Home extends React.Component {
    render() {
        return (
            <h1 className="display-3 text-primary text-center">Welcome! to Alphabet Store</h1>
        )
    }
}

class BestSeller extends React.Component {
    render() {
        return (
            <h1 className="display-3 text-danger text-center">Sorry! We are working on it!</h1>
        )
    }
}


export default Navbar;