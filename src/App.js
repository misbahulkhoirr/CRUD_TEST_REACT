// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Mahasiswa from './pages/Mahasiswa';
import AddMahasiswa from './pages/AddMahasiswa';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Mahasiswa/>}/>
      <Route path="/add-mahasiswa" element={ <AddMahasiswa/> } />
      </Routes>
    </Router>
  );
}

export default App;
