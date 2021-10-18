import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory,
} from 'react-router-dom';

import Menu from './containers/Menu';
import Navigation from './containers/Navigation';
import NotFound from './views/NotFound';
import routes from './routes';

export default ({
    onCheckUser = e => e,
}) => {
    const history = useHistory();

    useEffect(()=>{
        onCheckUser(history);
    },[]);
    
    return (
        <Router>
            <Fragment>
                <Menu />
                <Navigation />
                <Main>
                    <Switch>
                        {routes.map((item, index) => (
                            <Route key={index} {...item} />
                        ))}
                        <Route exact path="/" render={() => (<Redirect to="/" />)} />
                    </Switch>
                </Main>
            </Fragment>
        </Router>
    )
};

const Main = styled.div`
    padding-left: ${p => p.theme.menu.width};
    padding-top: ${p => p.theme.navigation.height};
`;
