import React from 'react';
import Homepage from './components/HomePage';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Homepage />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
