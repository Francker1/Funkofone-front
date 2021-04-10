import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cover from '../components/cover-page/Cover';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cover} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
