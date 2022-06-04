import { useState } from 'react';

export default function FormPractice({onCityClick}) {
    const [city, setCity] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        onCityClick(city);
        
    }
    
    return (
            <form onSubmit={handleClick}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  />
                <input type="submit" value="Submit Practice"/>
            </form>
    );


}