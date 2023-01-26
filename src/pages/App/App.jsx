// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import SearchPage from '../SearchPage/SearchPage';

import NavBar from '../../components/NavBar/NavBar';






export default function App() {
  const [user, setUser] = useState(null);

  return (
   <main className='App'>
   { user ?
   <>
      <NavBar />
      <Routes>
        <Route path="/" element = {<LandingPage/>} />
        <Route path="/search" element = {<SearchPage/>} />
        <Route path="/mywatch" element = {<MyWatchPage/>} />
      </Routes>
   
   </>

      :
      <AuthPage />
    }
   </main>
  );
}


