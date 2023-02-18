import React, {createContext, useEffect, useReducer } from 'react';
import { countryContextReducer } from '../reducers/reducers';


export const CountryContext = createContext();
const CountryContextProvider = (props) => {
    const [countriesContext, dispatch] = useReducer(countryContextReducer, []);
    useEffect(() => {
        // Get our Country Data
        setData();
    },[]);
    const setData = async function(){
        // Get our list
        const countriesContext = await fetchData();
        
        // Pass our country list through context
        dispatch({type:"SET", newList: countriesContext });
    }
    const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if (!response.ok) {
          throw new Error('Data coud not be fetched!')
        } else { 
          return response.json();
        }
    } 
    
    return (             
        <CountryContext.Provider value={{countriesContext, dispatch }}>
            {props.children}
        </CountryContext.Provider> 
    );
}
 
export default CountryContextProvider;
