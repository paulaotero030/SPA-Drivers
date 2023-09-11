import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Home from './Component/HomePage';
import Detail from './Component/Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage></LandingPage>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/drivers/:id' element={<Detail></Detail>} />
      </Routes>
    </div>
  );
}

export default App;
