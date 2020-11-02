import React from 'react';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Watch from './components/Files/Watch/Watch';
import Grill from './components/Files/Grill/Grill';
import Chain from './components/Files/Chain/Chain';
import Pendant from './components/Files/Pendant/Pendant';
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from './components/ScrollToTop';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Watch" exact component={Watch} />
        <Route path="/Grill" exact component={Grill} />
        <Route path="/Chain" exact component={Chain} />
        <Route path="/Pendant" exact component={Pendant} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
