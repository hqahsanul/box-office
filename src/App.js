import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';

function App() {
  return (
    <>
      <Navs />
      <Switch>
        <Route exact path="/">
          Hello
        </Route>
        <Route exact path="/starred">
          Starred
        </Route>
      </Switch>
    </>
  );
}

export default App;
