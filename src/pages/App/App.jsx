import { useState, useEffect } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './../../style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';

import * as myWatchAPI from "../../utilities/myWatch-api"


export default function App() {
  const [user, setUser] = useState(getUser());
  const [landingPoster, setLandingPoster] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [watched, setWatched] = useState([])
  const [notWatched, setNotWatched] = useState([])
  const [myActors, setMyActors] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY 
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
      const response = await fetch(searchUrl).then(res => res.json());
      setSearchResults(response);
      setSearch("")
    } catch (error) {
      console.log("Error!!>!>!")
      console.error(error);
    }
  }

  async function getWatched() {
    let watchedtemp = await myWatchAPI.getWatched()
    setNotWatched(watchedtemp.notWatched)
    setWatched(watchedtemp.watched)
    setMyActors(watchedtemp.myActors)
  }

  async function handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle, MWHaveSeen) {
    const myWatch = await myWatchAPI.addToMyWatch(mwID, mwName, mwMediaType, mwTitle, MWHaveSeen)
    getWatched()
  }

  useEffect(() => {
    getLandingPoster()
  }, [])

  return (
    <main className='App'>
      {user ?
        <>
          <div className='sticky-top'>
            <NavBar user={user} setUser={setUser} />
          </div>
          <div
            data-bs-spy="scroll"
            data-bs-target="navbar"
            data-bs-smooth-scroll="true"
            className="scrollspy-navbar position-relative"
            tabIndex="0">
            <div id="home" className='position-relative'>
              <LandingPage
                landingPoster={landingPoster}
                search={search}
                setSearch={setSearch}
                getSearch={getSearch}
                searchResults={searchResults}
                handleAddToMyWatch={handleAddToMyWatch}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}
              />             
            </div>
            <hr></hr>
            <div id="search" className='position-relative'>
              <SearchPage
                landingPoster={landingPoster}
                search={search}
                setSearch={setSearch}
                getSearch={getSearch}
                searchResults={searchResults}
                handleAddToMyWatch={handleAddToMyWatch}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}
              />
            </div>
            <hr></hr>
            <div className="text-center position-relative" id='mywatch' >
              <MyWatchPage
                getWatched={getWatched}
                watched={watched}
                notWatched={notWatched}
                myActors={myActors}
                handleAddToMyWatch={handleAddToMyWatch}
                user={user}
              />
            </div>
            <div className='sticky-bottom'>
              <Footer/>
            </div>
          </div>
        </>
        :
        <div className=""  >
          <AuthPage setUser={setUser} />
        </div>
      }
    </main>
  );
}


