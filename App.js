import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import services from './components/pages/services/services'
import products from './components/pages/products/products';;
import sign up from './components/pages/sign up/sign up';
import Home from './components/pages/Footer/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={services} />
        <Route path='/products' exact component={products} />
        <Route path='/sign up' exact component={sign up} />
      </Switch>
      <Footer />
    </Router>

    
);
}

export default App;
