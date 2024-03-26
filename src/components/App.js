
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
