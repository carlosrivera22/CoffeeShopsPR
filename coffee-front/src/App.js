import React from 'react';
import './App.css';

import ShopList from './components/ShopList/ShopList';

import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className='App'>
        <Switch>
          <Route exact path='/' component={ShopList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
