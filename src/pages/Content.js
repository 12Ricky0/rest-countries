import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Theme } from "../Components/Header";
import countries from "../data.json"

function Content() {
    const name = localStorage.getItem('country');
    const [selectedCountry, setSelectedCountry] = useState('')
    const [borderCountries, setBorderCountries] = useState(name)
    const navigate = useNavigate();

    useEffect(() => {
        const result = countries.find(country => country.name.includes(borderCountries))
        setSelectedCountry(result);



    }, [selectedCountry, borderCountries]);

    return (
        <section>
            <Theme />
            <button className="back-btn" onClick={(() => { navigate("/"); })}>
                <img className="back" src="images/back.svg" alt="back" />
                Back</button>
            <div className="details-container">
                <div className="" >
                    <div style={{ backgroundImage: `url(${selectedCountry.flag} )` }} className="details-flag">

                    </div>
                    <div className=" detail-text">
                        <div className="sub-container">
                            <h2>{selectedCountry.name}</h2>
                        </div>
                        <div className="parent-domain">

                            <div className="domain-a">

                                <p className="space"><b>Native Name:</b> {selectedCountry.nativeName}</p>
                                <p className="space"><b>Population:</b> {selectedCountry.population && selectedCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <p className="space"><b>Region:</b> {selectedCountry.region}</p>
                                <p className="space"><b>Sub Region:</b> {selectedCountry.subregion}</p>
                                <p className="space"><b>Capital:</b> {selectedCountry.capital}</p>
                            </div>
                            <div className="domain">
                                <p className="space"><b>Top Level Domain:</b> {selectedCountry.topLevelDomain}</p>
                                <p className="space"><b>Currency:</b> {selectedCountry.currencies && selectedCountry.currencies[0].name}</p>
                                <p className="space"><b>Languages:</b> {selectedCountry.languages && selectedCountry.languages.map((language) => language.name + ", ")}</p>
                            </div>
                        </div>
                        <div className="border-container">
                            <b className="bc">Border countries: </b>
                            {selectedCountry.borders && selectedCountry.borders.map(border => {
                                return (

                                    <div key={border} className=" button-container">

                                        <button className="border-btn" onClick={(() => {
                                            const result2 = countries.find(country => country.alpha3Code.includes(border))
                                            setBorderCountries(result2.name)
                                            navigate(`/${result2.name}`);
                                        })}>{
                                                countries.find(country => country.alpha3Code === border).alpha3Code === border &&
                                                countries.find(country => country.alpha3Code === border).name
                                            }</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
};

export default Content;