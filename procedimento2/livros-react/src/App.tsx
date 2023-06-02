import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';


import "./App.css";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

import LivrariaProvider from "./context/LivrariaProvider";
import { useState,useEffect } from "react";
 
 

function App() {
  const [showMenu, setShowMenu] = useState(false); // adiciona variável de estado para o menu
  const [activeTab, setActiveTab] = useState("catalogo")
  
  function selecionar(opcaoMenu:string){
    setActiveTab(opcaoMenu)
  }

  function handleToggle() {
    setShowMenu(!showMenu); // inverte o valor da variável de estado
  }

  useEffect(()=>{
    setActiveTab("catalogo")
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
          <button
            className="navbar-toggler"
            type="button"
            /*data-toggle="collapse" sai e troca onClick*/
            onClick={handleToggle} // substitui o data-toggle por onClick
            /*data-target="#navbarNav"*/
            aria-controls="navbarNav"
            /*aria-expanded="false"*/
            aria-expanded={showMenu} // adiciona o aria-expanded
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
             
          <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link 
                  style={{textDecoration:'none'}} 
                  onClick={() => selecionar("catalogo")}
                  to="/">
                   <span className={`nav-link ${activeTab === "catalogo" ? "active" : ""}`}> Catalogo </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  
                 style={{textDecoration:'none'}}  
                 onClick={() => selecionar("novo")}
                 to="/dados">
                    <span className={`nav-link ${activeTab === "novo" ? "active" : ""}`}>Novo</span>
                </Link>
              </li>
           
            </ul>
          </div>
        </nav>

        <LivrariaProvider>
  
          <Routes>
            <Route path="/" element={<LivroLista />} />
            <Route path="/dados" element={<LivroDados />} />
          </Routes>
 
        </LivrariaProvider>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
