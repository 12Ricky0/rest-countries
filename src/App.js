import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import Headers from "./Components/Header";
import Content from "./pages/Content";
// import Content from "./pages/Content";
import data from "./data.json"

function App() {

  const [selectedOption, setSelectedOption] = useState('');
  const [filter, setFilter] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  function handleSearch(e) {

    if (!e.target.value || e.target.value.length <= 0 || e.target.value.match(/\d/)) {
      setSelectedOption("")
    }

    else {
      setSelectedOption("Search")
      const result = data.filter(
        (country) => country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setSearchResult(result)
    }

  }

  function handleChange(e) {
    setSelectedOption(e.target.value)
    // console.log(searchResult)

    const result = data.filter(country => country.region === e.target.value)
    setFilter(result);
  }

  switch (selectedOption) {
    case "Search":
      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {searchResult.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "All":
      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {data.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "Africa":

      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {filter.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "Americas":

      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {filter.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "Asia":

      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {filter.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "Europe":

      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {filter.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    case "Oceania":

      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {filter.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );

    default:
      return (
        <Router>
          <Routes>
            <Route path="/" element={
              <main>
                <Headers
                  value={selectedOption}
                  onChange={handleChange}
                  onInput={handleSearch}

                />

                <div className="map-container">
                  {data.map(info => {
                    return (<Container
                      key={info.name}
                      src={info.flags.png}
                      country={info.name}
                      population={info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      region={info.region}
                      capital={info.capital}
                    />)
                  })}
                </div>

              </main>} />

            <Route path="/:name" element={<Content />} />

          </Routes>
        </Router>
      );


  }

}

export default App;
