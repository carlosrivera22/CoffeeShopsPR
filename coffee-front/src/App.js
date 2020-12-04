import React from 'react';
import './App.css';

import ShopList from './components/ShopList/ShopList';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/list' component={ShopList} />
        </Switch>
      </div>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
