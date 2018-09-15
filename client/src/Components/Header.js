import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogOut } from '.././actions/authGoogle'


const Header = (props) => {
    return (
        <header className="header content-container">
          <div className="content-container header-content show-for-desktop">
            <Link to="/home"  exact={true}>
              <h1>React Firebase App</h1>
            </Link>
            <button
                className="button"
                onClick={props.startLogOut} >Log Out</button>
          </div>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
      startLogOut: () => {
        return dispatch(startLogOut());
      }
  }
};

export default connect(undefined, mapDispatchToProps)(Header);
