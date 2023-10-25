import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from './components/card';
import LoginPage from './components/login';
import Favorites from './components/favorites';
import Navbar from './components/navbar';
import './style.css';

export default function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [isAuth, setIsAut] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [favorite, setFavorite] = useState([]);

  console.log(favorite);

  //Router

  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharactersList(data.results);
      console.log(data);
    };
    localStorage.setItem('isAuth', isAuth);
    apiFetch();
  }, [isAuth]);
  return (
    <div>
      <Navbar isAuth={isAuth} setIsAut={setIsAut} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Cards
                  charactersList={charactersList}
                  setFavorite={setFavorite}
                  favorite={favorite}
                />
              ) : (
                <LoginPage
                  setEmail={setEmail}
                  setPassword={setPassword}
                  email={email}
                  password={password}
                  setIsAut={setIsAut}
                />
              )
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
