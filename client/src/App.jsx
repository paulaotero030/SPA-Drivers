import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage/LandingPage';
import Home from './Component/HomePage/HomePage';
import Detail from './Component/Detail/Detail';
import CreateDriver from './Component/CreateDriver/CreateDriver';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage></LandingPage>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/drivers' element={<CreateDriver></CreateDriver>} />

        <Route path='/drivers/:id' element={<Detail></Detail>} />
      </Routes>
    </div>
  );
}

export default App;
