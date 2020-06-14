import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import FabNav from './components/FabNav';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="background-img">
          <div className="overlay">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              {/* <Route path="/blog" component={BlogPage} /> */}
              {/* <Route path="/contact" component={Contact} /> */}
            </Switch>
            <FabNav />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
