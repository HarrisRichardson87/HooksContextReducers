import React, {useEffect, useState, useContext} from 'react';
import NewCountryForm from './NewCountryForm';
import { CountryContext } from '../context/CountryContext';
import { ThemeContext } from '../context/ThemeContext';

const CountryList = () => {
    // Use my context from my api
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { countriesContext } = useContext(CountryContext);

    const [countries, setCountries] = useState([]);

    // Runs when context countries data changes ie going from 0 to a list
    useEffect(()=>{
        setCountries(countriesContext);
    }, [countriesContext]);
    
    return ( 
        <div style={{ background: theme.bg, color: theme.syntax }}>
            <NewCountryForm />
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ul>
                {countries.map(x => {
                    return ( <li 
                        style={{ background: theme.bg, color: theme.syntax}}
                        key={x.name.common}>
                            {x.name.common}
                    </li>)
                    
                })}
            </ul>
        </div> 
    );
}
 
export default CountryList;