import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Levels from './components/Levels.jsx';
import Books from './components/Books.jsx';
import Flashcards from './components/Flashcards.jsx';
import Upload from './components/Upload.jsx';

class App extends Component {

 
  render(){
  return (
    
    <div className="App">
      <Nav />
      <Books />
      
      <Levels />
      <Flashcards />
      <Upload />    
    </div>
  );

}
}

export default App;
