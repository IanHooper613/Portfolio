import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
const URL = process.env.BASE_URL; //for use on gh pages

function App() {
  console.log('URL ', process.env);
  return (
    <HashRouter basename='/'>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path= '/'component={Home} />
            <Route exact path= '/contact'component={Contact} />
            <Route exact path= '/portfolio' component={Portfolio} />
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </HashRouter>
  );
};
export default App;
