import React, { useState } from "react";

import charactersInfo from "./data/marvel/characters.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListaHeroes from "./components/ListaDeHeroes";


// Cocos ver
export default function App() {
  // El heroe seleccionado
  const [selectedHeroe, setSelectedHero] = useState(0);

  // El theme actual
  const [selectedTheme, setSelectedTheme] = useState("themeblanco");

  let className = "blanco";
  if (selectedTheme === "themenegro") {
    className = "negro";
  }


  return (
    <span className={className}>
    <div className="row justify-content-md-center contenedor">
      <div className="card-header p-4 mb-4">
        <h2 >Caracteres de Marvel</h2>
        <button
          onClick={() => {
            console.log("l");
            if (selectedTheme === "themeblanco") {
              setSelectedTheme("themenegro");
            } else {
              setSelectedTheme("themeblanco");
            }
          }}
          type="button"
          class="btn btn-primary"
        >
          cambiar
        </button>
      </div>
      <div className="col-6">
        <ListaHeroes
          heroe={charactersInfo.data}
          selectedHeroe={selectedHeroe}
          setSelectedHero={setSelectedHero}
        />
      </div>
      <div className="col-6">
        <DetalleDeHeroe
          className={className}
          heroe={charactersInfo.data.results[selectedHeroe]}
        />
      </div>
    </div>
    </span>
  );
}
