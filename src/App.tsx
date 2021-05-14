import React from 'react';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <Header name={"Felix"}/>
      <div className="part2">
        <Ad flavor="Cookies &amp; Cream" fontSize={24} darkTheme={true} />
        <Ad flavor="Vanilla Bean" fontSize={48} darkTheme={false} />
        <Ad flavor="Matcha Tea" fontSize={32} darkTheme={true} />
      </div>
      <div className="part1">
      <AdDesigner />
      <Votes />
      </div>
    </div>
  );
}

export default App;
