import React from 'react';
import './App.css';
import Nav from './component/navbar/navbar';
import HomePage from './component/navbar/homePage/homepage';
import Upcoming from './component/upcomingMovies/upcoming';
import LatestMovies from './component/latestMovie/Latest';

function App() {
  return (
    <div className="App">
   <Nav/>
   <HomePage/>
   <Upcoming/>
   <LatestMovies/>
 
    </div>
   
  );
}

export default App;
