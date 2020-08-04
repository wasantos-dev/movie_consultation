import React from 'react';
import Navbar from '../navbar.jsx'
import Modal from '../components/modal/modal.jsx'
import Home from '../components/home/home.jsx'

export default props => (
  <div className="App">
    <Navbar />
    <Home />
    <Modal id="exampleModal" />
  </div>
)