// components/CountryList.js
import React from 'react';
import './CountryList.css';

function CountryList({ countries, onSelect }) {
  return (
    <div>
      <h2>List of Countries</h2>
      {countries.map(country => (
        <div
          key={country.alpha3Code}
          onClick={() => onSelect(country)}
          className="country-container"
        >
          <button
            className="country-button"
          >
            <span className="country-name">{country.name}</span>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
              className="country-flag"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
