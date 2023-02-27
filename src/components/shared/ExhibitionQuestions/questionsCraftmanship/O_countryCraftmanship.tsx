import React, { useState, useEffect } from "react"
import { CountryDropdown } from 'react-country-region-selector';


const CountryFormCraftmanship = () => {

  const [countryCraftmanship, setCountryCraftmanship] = useState('');

  useEffect(() => {
    localStorage.setItem('countryCraftmanship', JSON.stringify(countryCraftmanship));
  }, [countryCraftmanship]);
   
  return (
    <div className="exh_country_selection">
      <h3>But first, where are you?</h3>
      <CountryDropdown
        value={countryCraftmanship}
        onChange={setCountryCraftmanship} />
    </div>
  );
  }

export default CountryFormCraftmanship



