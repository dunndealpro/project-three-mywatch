// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react"
import { Routes, Route, useResolvedPath } from 'react-router-dom'

import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './../../style.scss'

import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import SearchPage from '../SearchPage/SearchPage';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container'

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
  // const [mwSearch, setMwSearch] = useState(false)



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
      // const mwResults = await myWatchAPI.getMyWatch(search)
      // console.log(mwResults)
      // setMwSearch(mwResults)
      setSearchResults(response);
      console.log(response);
      setSearch("")
    } catch (error) {
      console.log("Error!!>!>!")
      console.error(error);
    }
    // getWatched()
    // console.log(search)
    // console.log(mwSearch)
  }

  async function getWatched() {
    console.log("Get Watched")
    let watchedtemp = await myWatchAPI.getWatched()
    console.log(watchedtemp.watched)
    console.log(watchedtemp.notWatched)
    console.log(watchedtemp.myActors)
    setNotWatched(watchedtemp.notWatched)
    setWatched(watchedtemp.watched)
    setMyActors(watchedtemp.myActors)
  }

  async function handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle, MWHaveSeen) {
    console.log("Add to myWatch ", mwID, mwName, mwMediaType, mwTitle, "HaveSeen: ", MWHaveSeen)
    const myWatch = await myWatchAPI.addToMyWatch(mwID, mwName, mwMediaType, mwTitle, MWHaveSeen)
    // const myMovie = await usersAPI.addToMyMovies(movieId)
    console.log(myWatch)
    getWatched()
    // console.log("User Model My Movies?", myMovie)
    // getAlreadyWatchedMovies()
    // setSelectedMovie(selectedMovie)
    // setSelectedDisplay(selectedDisplay)
    // setSearch(search)
  }


  useEffect(() => {

    console.log("I fire once!")
    getLandingPoster()
    // handleAddToMyWatch()
    console.log(watched)
    // getWatched() 
    // async function getWatched() {
    //   console.log("Get Watched")
    //   let watchedtemp = await myWatchAPI.getWatched()
    //   console.log(watchedtemp.watched)
    //   console.log(watchedtemp.notWatched)
    //   console.log(watchedtemp.myActors)
    //   setNotWatched(watchedtemp.notWatched)
    //   setWatched(watchedtemp.watched)
    //   setMyActors(watchedtemp.myActors)
    // }
    // getWatched();

  }, [])

  //   // getLandingPoster()
  // }, [])



  return (
    <main className='App'>
      {/* <Container> */}

      {user ?
        <>
          {/* <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage
              landingPoster={landingPoster}
              search={search}
              setSearch={setSearch}
              getSearch={getSearch}
              searchResults={searchResults}
              handleAddToMyWatch={handleAddToMyWatch}
              // mwSearch={mwSearch}
              watched={watched}
              notWatched={notWatched}
              myActors={myActors}

            // getLandingPoster={getLandingPoster}
            />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/mywatch" element={<MyWatchPage
              getWatched={getWatched}
              watched={watched}
              notWatched={notWatched}
              myActors={myActors}
              handleAddToMyWatch={handleAddToMyWatch}
              user={user}


            />} /> */}
            {/* <div> */}
          <div className='sticky-top'>
            {/* <Row> */}
            <NavBar user={user} setUser={setUser} />

            {/* </Row> */}
          </div>
          
          {/* <Row> */}
          <div
            data-bs-spy="scroll"
            data-bs-target="navbar"
            // data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            // data-offset="150"
            data-bs-offset="0"
            className="scrollspy-navbar position-relative"
            tabIndex="0">
            <div id="home" className=''>
           
              <LandingPage
                landingPoster={landingPoster}
                search={search}
                setSearch={setSearch}
                getSearch={getSearch}
                searchResults={searchResults}
                handleAddToMyWatch={handleAddToMyWatch}
                // mwSearch={mwSearch}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}

              // getLandingPoster={getLandingPoster}
              />             
            </div>
            <hr></hr>
            <div id="search" >
              <SearchPage
                landingPoster={landingPoster}
                search={search}
                setSearch={setSearch}
                getSearch={getSearch}
                searchResults={searchResults}
                handleAddToMyWatch={handleAddToMyWatch}
                // mwSearch={mwSearch}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}
              />
            </div>
            <hr></hr>
            <div className="text-center" id='mywatch' >
              <MyWatchPage
                getWatched={getWatched}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}
                handleAddToMyWatch={handleAddToMyWatch}
                user={user}
              />
            </div>
           
          </div>
          {/* </Routes> */}
          {/* </Row> */}
        </>

        :
        <div className=""  >
          <AuthPage setUser={setUser} />

        </div>
      }
      {/* </Container> */}
    </main>
  );
}


