import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 import ShowCard from '../components/ShowCard';
 import "./Home.css"


const Home = () => {
  const [shows, setShows] = useState([]);


  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        console.log(response.data);
        setShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, []);



  return (
    <div className="home">
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div className="show-card" key={show.show.id}>
            <h2>{show.show.name}</h2>
         
            <p>{show.show.language}</p>
            <p>{show.show.genres.join(', ')}</p>
            <ShowCard key={show.id} show={show.show}  />
            <Link to={`/summary/${show.show.id}`} >View Summary</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

