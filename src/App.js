import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";
import Singlepost from "./Pages/Singlepost";
import Howitwork from "./Pages/Howitwork";
import Agentslist from "./Pages/Agentslist";
import Agentprofile from "./Pages/Agentprofile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="singlepost" element={<Singlepost />} />
          <Route path="howitwork" element={<Howitwork />} />
          <Route path="agentslist" element={<Agentslist />} />
          <Route path="agentprofile" element={<Agentprofile />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
