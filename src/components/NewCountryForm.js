import React, { useState, useContext } from 'react';
import { CountryContext } from '../context/CountryContext';

const NewCountryForm = () => {
    const [name, setName] = useState("");
    const { dispatch } = useContext(CountryContext);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Very cool! we do not have to pass our change back two components
        dispatch({type:"ADD", name });

        // Reset to blank
        setName("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Country Name</label>
            <input value={name} type="text" required onChange={handleChange}/>
            <input type="submit" value="Add Country"/>
        </form> 
    );
}
 
export default NewCountryForm;