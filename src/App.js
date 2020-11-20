import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request'
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav/>
       {/* Banner */}
       <Banner/>
      <Row title='NETFLIX ORIGINALS' isLargeRow fetchURL={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMoviess} />
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />

      
    </div>
  );
}

export default App;

