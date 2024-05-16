import React from 'react';
import Homepage from './components/HomePage';
import CareersPage from './components/CareersPage';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Homepage />} />
    <Route path ="/CareersPage" element = {<CareersPage/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
