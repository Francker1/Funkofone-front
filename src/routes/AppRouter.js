import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cover from '../components/cover-page/Cover';
import CreatePhone from '../components/forms/CreatePhone';
import EditPhone from '../components/forms/EditPhone';
import PhoneList from '../components/products/PhoneList';
import PhoneScreen from '../components/products/PhoneScreen';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route exact path="/phones/" component={PhoneList} />
        <Route exact path="/phones/:id" component={PhoneScreen} />
        <Route exact path="/phones/edit/:id" component={EditPhone} />
        <Route exact path="/new/" component={CreatePhone} />

        {/* If not match with route if first level, redirect to home, but also you can show Route that render 404 Component */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
