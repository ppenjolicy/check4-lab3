import React from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';

const word = "Hello";
function App() {
  return (
    <div>
      <WordCard value="hello" />
    </div>
  );

}

export default App;