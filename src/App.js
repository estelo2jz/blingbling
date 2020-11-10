import React from 'react';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import All from './components/Pages/All';
import Watch from './components/Files/Watch/Watch';
import Grill from './components/Files/Grill/Grill';
import Chain from './components/Files/Chain/Chain';
import Pendant from './components/Files/Pendant/Pendant';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Pages/Footer';
import ScrollToTop from './components/ScrollToTop';
import FeaturedItem from './components/Pages/FeaturedItem';

import './styles/main.scss';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Navbar />
        <FeaturedItem />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/All" exact component={All} />
          <Route path="/Watch" exact component={Watch} />
          <Route path="/Grill" exact component={Grill} />
          <Route path="/Chain" exact component={Chain} />
          {/* <Route path="/Pendant" exact component={Pendant} /> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
