import React, { createContext, useState } from 'react'

const ConfigureContext = createContext();

const ConfigureContextProvider = ({children}) => {
const [city, setCity] = useState({});
const [language, setLanguage] = useState('en');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [addressLine1, setAddressLine1] = useState('');
const [addressLine2, setAddressLine2] = useState('');
const [postalCode, setPostalCode] = useState('');
const [countryCode, setCountryCode] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');

return(<ConfigureContext.Provider value={{city, setCity, language, setLanguage, firstName, setFirstName, lastName, setLastName,
addressLine1, setAddressLine1, addressLine2, setAddressLine2, postalCode, setPostalCode, countryCode, setCountryCode,
phoneNumber, setPhoneNumber}}>{children}</ConfigureContext.Provider>);}
export { ConfigureContextProvider };
export default ConfigureContext;
