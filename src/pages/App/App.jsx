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



export default function App() {
  const [user, setUser] = useState(getUser());
  const [landingPoster, setLandingPoster] = useState()


  const API_KEY = "a72c1d466153d06b65f2879b369031d8"
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`

  const getLandingPoster = async () => {
    try {
      const response = await fetch(trendingUrl).then(res => res.json());
      setLandingPoster(response)
    } catch (error) {
      console.log("Error! ", error)
    }
  }

  useEffect(() => {
    getLandingPoster()
  }, [])



  return (
    <main className='App'>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage
              landingPoster={landingPoster}
              getLandingPoster={getLandingPoster}
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


