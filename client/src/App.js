import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainForm from "./containers/mainForm/MainForm";
import Circle from "./components/circle/Circle";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainForm}/>
      <Route exact path="/task2" component={Circle}/>
    </Router>
  );
}

export default App;