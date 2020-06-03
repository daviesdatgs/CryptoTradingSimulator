//Modules
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//Pages
import { LandingPage, Login, Register, Dashboard, BTC, ETH, NotFound } from './pages';

export default
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/btc" component={BTC} />
            <Route path="/eth" component={ETH} />
            <Route component={NotFound} />
        </Switch>
    </Router>;