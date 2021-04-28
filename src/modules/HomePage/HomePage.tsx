import React from 'react';
import ShortTermStatistics from '@modules/StatisticsPage/ShortTermStatistics/ShortTermStatistics';
import { Redirect, Route, Switch } from 'react-router';
import MainPage from './MainPage/MainPage';

const HomePage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/ShortTermStatistics" component={ShortTermStatistics} />
        <Route path="/MainPage" component={MainPage} />
        <Route path="/">
          <Redirect to="/MainPage" />
        </Route>
      </Switch>
    </>
  );
};

export default HomePage;
