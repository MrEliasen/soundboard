/*
* @Author: Mark Eliasen
* @Date:   2017-04-18 15:00:31
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-30 00:03:40
*/

import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './app/App';
import Home from './home/Home';

class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={App}>
                    <Route path="/" component={Home}/>
                </Route>
            </Router>
        );
    }
}

export default Routes;
