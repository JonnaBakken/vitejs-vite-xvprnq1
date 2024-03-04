import React from 'react';

const FilmInfo = ({ film }) => {
  const { title, director, producer, opening_crawl, release_date } = film;

  return (
    <div>
      <h2>{title}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Producer:</strong> {producer}</p>
      <p><strong>Opening Crawl:</strong> {opening_crawl}</p>
      <p><strong>Release Date:</strong> {release_date}</p>
    </div>
  );
};

export default FilmInfo;
