import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShowSummary.css';



const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShow();
  }, [id]);

  return (
    <div className="show-summary">
      <h2>Show Summary</h2>
      {show ? (
        <div className="summary-content">
          <h3>{show.name}</h3>
          <img src={show.image.medium} alt={show.name} />
          <p>{show.summary}</p>
          <p>Type: {show.type}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(', ')}</p>
          <p>Status: {show.status}</p>
          <p>Runtime: {show.runtime} minutes</p>
          <p>Premiered: {show.premiered}</p>
          <p>Rating: {show.rating.average}</p>
          <p>Network: {show.network.name}</p>
          <p>Official Site: <a href={show.officialSite}>{show.officialSite}</a></p>
      
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSummary;
