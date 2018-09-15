import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
  let Component = props.component;
  return <Route {...props}
                component = { ()=>{
                  return props.isAuthenticated ? (
                      <Redirect to="/home"/>

                  ) : (
                      <Component {...props}/>
                  )
                }}
  />
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !! state.auth.uid
  }
};

export { PublicRoute };

export default connect(mapStateToProps)(PublicRoute);


