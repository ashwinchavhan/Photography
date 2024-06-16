import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';

import Gallery from './component/Gallery';
import Home from './component/Home';
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Contact from "./component/Contact";




function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="Service" element = {<Service/>}/>
          <Route path="Contact" element = {<Contact/>}/>
          


        </Routes>



      </div>


    </Router>
  );
}

export default App;