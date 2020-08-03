import React from 'react';
import './App.css';
import Header from './header/header'
import Main from './menu/menu';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer className="App-footer">
        <div className="App-link">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
