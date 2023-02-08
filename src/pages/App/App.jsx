// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react"
import { Routes, Route, useResolvedPath } from 'react-router-dom'

import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import SearchPage from '../SearchPage/SearchPage';

import NavBar from '../../components/NavBar/NavBar';

import * as myWatchAPI from "../../utilities/myWatch-api"

import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [landingPoster, setLandingPoster] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [watched, setWatched] = useState([])
  const [notWatched, setNotWatched] = useState([])
  const [myActors, setMyActors] = useState([])
  const [mwSearch, setMwSearch] = useState([])
 


  const API_KEY = "a72c1d466153d06b65f2879b369031d8"



  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}&page=1&include_adult=false`


  const getLandingPoster = async () => {
    try {

      const response = await fetch(trendingUrl).then(res => res.json());
      console.log("Trending Stuff:  ", response)
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
      const mwResults = await myWatchAPI.getMyWatch(search)
      console.log(mwResults)
      setSearchResults(response);
      setMwSearch(mwResults)
      console.log(response);
      setSearch("")
    } catch (error) {
      console.log("Error!!>!>!")
      console.error(error);
    }
    console.log(search)
    console.log(mwSearch)
  }

  async function getWatched(){
    console.log("Get Watched")
    let watchedtemp = await myWatchAPI.getWatched()
    console.log(watchedtemp.watched)
    console.log(watchedtemp.notWatched)
    console.log(watchedtemp.myActors)
    setNotWatched(watchedtemp.notWatched)
    setWatched(watchedtemp.watched)
    setMyActors(watchedtemp.myActors)
  

  }

  async function handleAddToMyWatch(mwID,  mwName, mwMediaType, mwTitle, MWHaveSeen) {
    console.log("Add to myWatch ", mwID, mwName, mwMediaType,   mwTitle,  "HaveSeen: ", MWHaveSeen)
    const myWatch = await myWatchAPI.addToMyWatch(mwID, mwName, mwMediaType, mwTitle,  MWHaveSeen)
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
    console.log(watched)

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
            <Route path="/mywatch" element={<MyWatchPage 
            getWatched = {getWatched}
            watched = {watched}
            notWatched = {notWatched}
            myActors = {myActors}
            handleAddToMyWatch={handleAddToMyWatch}
            user={user}
            
            
            />} />
          </Routes>

        </>

        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


