import React, { useEffect, useState } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(data => setFilms(data.results));
  }, []);

  const handleSearch = () => {
    const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filteredFilms.length > 0) {
      setFilmData(filteredFilms[0]);
    } else {
      setFilmData(null);
    }
  };

  return (
    <div>
      <h1>Star Wars Film Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter film title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filmData && (
        <div>
          <h2>{filmData.title}</h2>
          <p><strong>Director:</strong> {filmData.director}</p>
          <p><strong>Producer:</strong> {filmData.producer}</p>
          <p><strong>Opening Crawl:</strong> {filmData.opening_crawl}</p>
          <p><strong>Release Date:</strong> {filmData.release_date}</p>
        </div>
      )}
    </div>
  );
};

export default App;
