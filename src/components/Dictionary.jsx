import React, { useState } from 'react';
import dictionary from '../customDictionary';
import './Dictionary.css';

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const wordEntry = dictionary.find(entry => entry.word.toLowerCase() === lowerCaseSearchTerm);

    if (wordEntry) {
      setDefinition(wordEntry.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div className="dictionary-container">
      <h2 className="title">XDictionary</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="definition-container">
        <strong>Definition:</strong>
        <p className="definition">{definition}</p>
      </div>
    </div>
  );
};

export default XDictionary;
