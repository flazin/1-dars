// App.js
import React, { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries of the World</h1>
      </header>
      <div className="container">
        <CountryList countries={countries} />
      </div>
    </div>
  );
}

export default App;
