import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SearchResult from './Views/SearchResult.jsx';
import Home from './Views/Home.jsx';
import About from './Views/About.jsx';
import Login from './Views/Login.jsx';
import PNRStatus from './Views/PNRStatus.jsx';
import MyBookings from './Views/MyBookings.jsx';





createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<Login />} />
     <Route path="/search" element={<SearchResult />} />
      <Route path="/pnrstatus" element={<PNRStatus />} />
      <Route path="/mybookings" element={<MyBookings />} />
    </Routes>
  </BrowserRouter>
);
