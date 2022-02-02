
import React from "react";
import "./sass/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect  } from "react";
import Inicio from "./components/inicio"
import Ayudar from "./components/Ayuda";
import CrearCuenta from "./components/crearCuenta"
import Quienes from "./components/quienes";


function App () {
  const ThemeContext = React.createContext() 
  const [state, setState] = useState('test')
    return (
      <ThemeContext.Provider value={state} >
        <BrowserRouter className="App">
          <Routes>
            <Route className="Route" path="/" element={<Inicio />} />
            <Route className="Route" path="/cuenta" element={<CrearCuenta/>} />
            <Route className="Route" path="/ayuda" element={<Ayudar/>} />
            <Route className="Route" path="/quienes" element={<Quienes />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider> 
    );

}
export default App;

