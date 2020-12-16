import React from 'react';
import './App.css';

import ShopList from './components/ShopList/ShopList';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage'
import {Route,  HashRouter as Router, Switch} from 'react-router-dom'
import BookDetails from './components/Books/BookDetails';
import ShopBooks from './components/Books/ShopBooks';
import BookList from './components/Books/BookList';
function App() {
  return (
    <Router basename="/static">
      <Navigation />
      <div className='App' id='main'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/list' component={ShopList} />
          <Route exact path='/books' component={BookList}/>
          <Route exact path='/books/:id' component={BookDetails}/>
          <Route exact path='/coffee_shop/:id/books' component={ShopBooks}/>
   
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
