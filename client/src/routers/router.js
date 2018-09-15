import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LogInPage from '.././Components/LogInPage';
import HomePage from '.././Components/HomePage';

import AddPage from '.././Components/AddPage';
import EditPage from '.././Components/EditPage';
import NotFoundPage from '.././Components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const history = createHistory();

const AppRouter = (props) => {
  return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute exact path="/" component={LogInPage}/>

            <PrivateRoute exact path="/home" component={HomePage}/>
            <PrivateRoute path="/add" component={AddPage} history={history}/>
            <PrivateRoute path="/edit/:id" component={EditPage} history={history}/>

            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
  );
};

export { history };

export  default AppRouter;