import React from 'react';
// import logo from './logo.svg';
import { Router as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (
    <Router basename='/'>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path='/portfolio' component={Home} />
            <Route exact path='/portfolio/contact' component={Contact} />
            <Route exact path='/portfolio/portfolio' component={Portfolio} />
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
};
export default App;
