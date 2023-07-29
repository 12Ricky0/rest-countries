import React from "react";
import { useNavigate } from 'react-router-dom';

function Container({ src, country, population, region, capital }) {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/${country}`);
        console.log(country);
        localStorage.setItem('country', country);
    };

    return (
        <div className="parent-container">
            <div className="flag-container" onClick={handleClick}>
                <div style={{ backgroundImage: `url(${src} )` }} className="flag-img">
                </div>
                <div className="text-container">
                    <h2 >{country}</h2>
                    <p><b>Population:</b> {population}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {capital}</p>
                </div>


            </div>

        </div>

    )
}

export default Container