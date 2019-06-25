import React, { Component } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './layout/home';
import About from './layout/about/about'
import ReactWOW from 'wowjs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);



class App extends Component {
  componentDidMount() {
    new ReactWOW.WOW().init();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route path="/" component={Home} exact />
            <Route exact path="/about" component={About} />
            {/* <Route path="*" component={Home} /> */}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
