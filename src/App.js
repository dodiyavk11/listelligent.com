import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nopage from "./Pages/Nopage";
import Singlepost from "./Pages/Singlepost";
import Howitwork from "./Pages/Howitwork";
import Agentslist from "./Pages/Agentslist";
import Agentprofile from "./Pages/Agentprofile";
import Agentsignup from "./Pages/Agents/Agentsignup";
import Howagentswork from "./Pages/Agents/Howagentswork";
import Myprofile from "./Pages/Agents/Myprofile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="singlepost" element={<Singlepost />} />
          <Route path="howitwork" element={<Howitwork />} />
          <Route path="agentslist" element={<Agentslist />} />
          <Route path="agentprofile" element={<Agentprofile />} />
          <Route path="agentsignup" element={<Agentsignup />} />
          <Route path="howagentswork" element={<Howagentswork />} />
          <Route path="myprofile" element={<Myprofile />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
