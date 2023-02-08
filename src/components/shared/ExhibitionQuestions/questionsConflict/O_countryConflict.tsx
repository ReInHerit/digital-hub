import React, { useState, useEffect } from "react"
import { CountryDropdown } from 'react-country-region-selector';


const CountryFormConflict = () => {

  const [countryConflict, setCountryConflict] = useState('');

  useEffect(() => {
    localStorage.setItem('countryConflict', JSON.stringify(countryConflict));
  }, [countryConflict]);
   
  return (
    <div className="exh_country_selection">
      <h3>But first, where are you?</h3>
      <CountryDropdown
        value={countryConflict}
        onChange={setCountryConflict} />
    </div>
  );
  }

export default CountryFormConflict



