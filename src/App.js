import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<Nopage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;