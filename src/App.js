import React from 'react';
import './App.css';
import { default as Home } from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navigation } from "./Router"
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Mcpechatbot from "./projects/Mcpechatbot";
function App() {
  return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact/>} />
            <Route path="/projects" exact component={() => <Projects/>} />
            <Route path="/projects/mcpechatbot" exact component={() => <Mcpechatbot/>}/>
          </Switch>
        </Router>
          <Footer/>
      </div>
  );
}

export default App;
