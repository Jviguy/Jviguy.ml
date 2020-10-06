import React from 'react';
import './App.css';
import { default as Home } from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navigation } from "./Router"
import Footer from "./Footer";
import About from "./About";
function App() {
  return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />

          </Switch>
        </Router>
          <Footer/>
      </div>
  );
}

export default App;
