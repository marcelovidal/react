function ListaHeroes(props) {
    console.log("selectedHeroe", props.selectedHeroe);
    return (
      props.heroe.results.length > 0 && (
        <>
          <ul className="list-group">
            {props.heroe.results.map((elemento, i) => {
              let colorFondo = "";
              if (i === props.selectedHeroe) {
                colorFondo = "lightblue";
              }
              return (
                <li
                  key={elemento.id}
                  style={{
                    backgroundColor: colorFondo
                  }}
                  className="list-group-item"
                >
                  <a
                    onClick={() => {
                      console.log("click " + elemento.name);
                      props.setSelectedHero(i);
                    }}
                    href="#"
                  >
                    {elemento.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )
    );
  }
  
  export default ListaHeroes;
  