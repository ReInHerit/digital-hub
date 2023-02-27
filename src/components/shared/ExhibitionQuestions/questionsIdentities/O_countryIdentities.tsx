import React, { useState, useEffect } from "react"
import { CountryDropdown } from 'react-country-region-selector';


const CountryFormIdentities = () => {

  const [countryIdentities, setCountryIdentities] = useState('');

  useEffect(() => {
    localStorage.setItem('countryIdentities', JSON.stringify(countryIdentities));
  }, [countryIdentities]);
   
  return (
    <div className="exh_country_selection">
      <h3>But first, where are you?</h3>
      <CountryDropdown
        value={countryIdentities}
        onChange={setCountryIdentities} />
    </div>
  );
  }

export default CountryFormIdentities



