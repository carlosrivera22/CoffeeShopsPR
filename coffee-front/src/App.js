import React from 'react';
import './App.css';

import ShopList from './components/ShopList/ShopList';
import Navigation from './components/Navigation/Navigation';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ShopList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
