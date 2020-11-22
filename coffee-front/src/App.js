import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import ShopList from './components/ShopList/ShopList';
import Navigation from './components/Navigation/Navigation'

import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className='App'>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={ShopList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
