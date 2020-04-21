import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
 
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </div>
    </Router>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
