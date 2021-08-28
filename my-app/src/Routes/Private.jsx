import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAllowed from '../services/auth';

const Private = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
          isAllowed() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default Private;