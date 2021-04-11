import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cover from '../components/cover-page/Cover';
import PhoneList from '../components/products/PhoneList';
import PhoneScreen from '../components/products/PhoneScreen';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route exact path="/phones/" component={PhoneList} />
        <Route exact path="/phones/:id" component={PhoneScreen} />
        <Route exact path="/phones/edit/:id" />
        <Route exact path="/new/" />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
