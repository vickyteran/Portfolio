import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navegador from "./Navbar/Navegador";
import Home from "./Home/Home";

function App() {
  
  return (
   <>
      <Navegador/>
      <Home/>
      </>
  );
}

export default App;
