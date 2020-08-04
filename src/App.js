import React from 'react';
import './App.css';
import Modal from './modal/modal.jsx'

function App() {
  return (
    <div className="App">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="buttonzinho">
        Launch demo modal
      </button>
      <Modal id="exampleModal" />
    </div>
  );
}

export default App;
