  import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAllowed from '../services/auth.js';

const Public = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
          isAllowed() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default Public;