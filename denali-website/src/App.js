import React from 'react';
import Homepage from './components/HomePage';
import CareersPage from './components/CareersPage';
import SolutionsPage from './components/Solutions';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Homepage />} />
    <Route path ="/CareersPage" element = {<CareersPage/>} />
    <Route path ="/Solutions" element = {<SolutionsPage/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
