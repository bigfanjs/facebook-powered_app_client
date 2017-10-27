import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        !authenticated ? <Redirect to="/signin" /> : <Component {...props} />
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.user.status === 'authenticated'
});

export default connect(mapStateToProps)(PrivateRoute);