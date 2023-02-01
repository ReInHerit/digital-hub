import React, { useState, useEffect } from "react"
import { CountryDropdown } from 'react-country-region-selector';


const CountryFormConflict = () => {

  const [countryConflict, setCountryConflict] = useState('');

  useEffect(() => {
    localStorage.setItem('countryConflict', JSON.stringify(countryConflict));
  }, [countryConflict]);
   
  return (
    <div>
      <h1>But first, where are you?</h1>
      <CountryDropdown
        value={countryConflict}
        onChange={setCountryConflict} />
    </div>
  );
  }

export default CountryFormConflict



