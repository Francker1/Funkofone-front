import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cover from '../components/cover-page/Cover';
import PhoneList from '../components/products/PhoneList';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route exact path="/phones/" component={PhoneList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
