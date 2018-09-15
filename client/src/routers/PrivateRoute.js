import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '.././Components/Header'

const PrivateRoute = (props) => {
  console.log('PrivateRoute = (props) => {', props)
  let Component = props.component;
  return <Route {...props}
                component = { ()=>{
                  return props.isAuthenticated ? (
                      <div>
                        <Header/>
                        <Component {...props}/>
                      </div>

                  ) : (
                      <Redirect to="/"/>
                  )
                }}
  />
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !! state.auth.uid
  }
};

export { PrivateRoute };

export default connect(mapStateToProps)(PrivateRoute);


