import React from 'react';
import GameLayout from './layout/GameLayout';
import { Route, Switch } from 'react-router-dom';
import LoginLayout from './layout/LoginLayout';
import { connect } from 'react-redux';

const App = ({havePassport}) => {
    if(!havePassport) {
        return(
            <Switch>
                    <Route exact path="/" component={LoginLayout} />
            </Switch>
        )
    } else {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={GameLayout} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = ({loginState}) => {
    return {
        havePassport: loginState.loading,
    }
}

export default connect(mapStateToProps)(App);
