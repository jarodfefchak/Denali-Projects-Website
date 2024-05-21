import React from 'react';
import Homepage from './components/HomePage';
import CareersPage from './components/CareersPage';
import SolutionsPage from './components/Solutions';
import ContactPage from './components/Contact';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Homepage />} />
    <Route path ="/CareersPage" element = {<CareersPage/>} />
    <Route path ="/Solutions" element = {<SolutionsPage/>} />
    <Route path ="/Contact" element = {<ContactPage/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
