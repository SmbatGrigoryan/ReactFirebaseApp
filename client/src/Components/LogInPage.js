import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '.././actions/authGoogle'

const LogInPage = (props) => {
  return (
      <div className="logIn">
        <div>
          <h1>React Firebase App</h1>
          <button onClick={props.startLogIn}>LogIn</button>
        </div>
      </div>
  )
};


const mapDispatchToProps = (dispatch) => {
  return {
    startLogIn: () => {
      return dispatch(startLogIn())
    }
  }
};

export default connect(undefined, mapDispatchToProps)(LogInPage);