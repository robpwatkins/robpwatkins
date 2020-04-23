import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FabNav from './components/FabNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-img">
          <div className="overlay">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <FabNav />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
