import React, { useState, useEffect } from "react";

export function Theme() {
    const [theme, setTheme] = useState('light');
    const v = localStorage.getItem('theme');


    function handleClick() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme)

    }


    useEffect(() => {

        const storedValue = localStorage.getItem('theme');

        const body = document.querySelector("body")
        const container = document.querySelectorAll("parent-container")

        if (storedValue === "dark") {
            body.classList.add("dark-mode")
            container.forEach(cont => { cont.classList.add("dark-mode") })
        }


        else {
            body.classList.add("light-mode"); body.classList.remove("dark-mode");
            container.forEach(cont => { cont.classList.add("light-mode"); cont.classList.remove("dark-mode") })
        }

    }, [theme]);

    return (
        <header className={` ${v === 'light' ? "light-mode" : "dark-mode"}`}>
            <span className="header">Where in the world?</span>
            <span onClick={handleClick} className="mode">Dark Mode</span>
        </header>

    )
}

function Headers({ onChange, value, onInput }) {


    return (
        <div >
            <Theme
            />
            <div className="form-container">
                <form>
                    <div className="search-container">
                        <input className="search" type="text" placeholder="Search for a country..." onInput={onInput} />
                        <div className="search-icon" />
                    </div>
                </form>
                <form>
                    <select id="cars" value={value} className="filter" placeholder="Filter by Region" onChange={onChange}>
                        <option disabled default value="">
                            Filter by Region
                        </option>
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Headers