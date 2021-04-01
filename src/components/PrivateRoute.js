import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { GlobalContext } from '../context/GlobalContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser } = useContext(GlobalContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;