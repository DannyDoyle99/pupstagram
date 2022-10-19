import Navbar from './components/Navbar';
import Feed from './components/Feed';
import { fetchDogs } from './components/fetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'

import './index.css'

function App() {
  const [breed, setBreed] = useState('Hound')
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    fetchDogs(breed.toLowerCase())
    .then(data => setDogs(data.message))
  }, [breed])
  console.log(dogs)
  return (
    <BrowserRouter>
      <Navbar breed={breed} setBreed={setBreed}></Navbar>
      <Feed dogs={dogs} breed={breed}></Feed>
    </BrowserRouter>  
  );
}

export default App;
