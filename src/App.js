import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantityPicker';
import Footer from './components/footer';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid">
      <NavBar></NavBar>
      <h1>Hello React!!!</h1>

      <QuantityPicker></QuantityPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;
