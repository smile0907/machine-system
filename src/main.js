import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import App from './app';
import Login from './views/login';
import Signup from './views/signup';

import { actions } from './stores';
const auth = actions.auth;

export default connect(
    state => ({ theme: state.theme }),
)(({ theme }) => (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
                <Route path="/dashboard">
                    <App {...auth} />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <Signup />
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
));
