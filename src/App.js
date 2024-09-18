import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/navbar.jsx';
import Home from './Components/Home/Home.jsx';
import WhoAreWe from './Components/Whoarewe/whoarewe.jsx'; // Add other components as needed
import WhatWeDo from './Components/Whatwedo/whatwedo.jsx';
import LifeAtInnovate from './Components/LifeAtInnovate/lifeatinnovate.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Started from './Components/Getstarted/Getstarted.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-are-we" element={<WhoAreWe />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/life-at-innovate" element={<LifeAtInnovate />} />
      </Routes>
      <Routes>
      <Route path="/get-started" element={<Started/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
