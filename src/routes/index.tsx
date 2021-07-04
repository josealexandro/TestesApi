import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Travels from '../pages/Travels';


const Routes: React.FC = ( ) => (
    <Switch>
        <Route path="/" exact component={Dashboard}  />
        <Route path="/Travels" exact component={Travels}  />
    </Switch>
);

export default Routes;