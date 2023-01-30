// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'

import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import SearchPage from '../SearchPage/SearchPage';

import NavBar from '../../components/NavBar/NavBar';

import * as myWatchAPI from "../../utilities/myWatch-api"


export default function App() {
  const [user, setUser] = useState(getUser());
  const [landingPoster, setLandingPoster] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const API_KEY = "a72c1d466153d06b65f2879b369031d8"


  
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}&page=1&include_adult=false`


  const getLandingPoster = async () => {
    try {

      const response = await fetch(trendingUrl).then(res => res.json());
      setLandingPoster(response)
    } catch (error) {
      console.log("Error! ", error)
    }     
  }

  const getSearch = async (evt) => {    
        evt.preventDefault();

    try {
      console.log("Search: ", search)
      const response = await fetch(searchUrl).then(res => res.json());      
       setSearchResults(response) ;
      console.log(response);
      setSearch("")
      
    } catch (error) {
      console.log("Error!!>!>!")
      console.error(error);
    }
    console.log(search)
  }

 
  async function handleAddToMyWatch(mwID, mwMediaType, mwTitle, mwName, MWHaveSeen) {
    console.log("Add to myWatch ", mwID, mwMediaType, mwTitle, mwName, "HaveSeen: ", MWHaveSeen)
    const myWatch = await myWatchAPI.addToMyWatch(mwID, mwMediaType, mwTitle, mwName, MWHaveSeen)
    // const myMovie = await usersAPI.addToMyMovies(movieId)
    console.log(myWatch)
    // console.log("User Model My Movies?", myMovie)
    // getAlreadyWatchedMovies()
    // setSelectedMovie(selectedMovie)
    // setSelectedDisplay(selectedDisplay)
    // setSearch(search)
  }
  

  useEffect(() => {
    console.log("I fire once!")    
    getLandingPoster()
    
    }, [])

  //   // getLandingPoster()
  // }, [])



  return (
    <main className='App'>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage
              landingPoster={landingPoster}
              search={search}
              setSearch={setSearch}
              getSearch={getSearch}
              searchResults={searchResults}
              handleAddToMyWatch={handleAddToMyWatch}
            
              // getLandingPoster={getLandingPoster}
            />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/mywatch" element={<MyWatchPage />} />
          </Routes>

        </>

        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


