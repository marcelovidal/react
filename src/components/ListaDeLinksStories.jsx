function ListaDeLinksStories(props) {
  console.log(props)
  

    return (
      props.lista.length > 0 && (
        <>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDos">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDos"
                aria-expanded="true"
                aria-controls="collapseDos"
              >
                Stories
              </button>
            </h2>
          <div
              id="collapseDos"
              className="accordion-collapse collapse"
              aria-labelledby="headingDos"
              data-bs-parent="#accordionExample"
        >
            <div className="accordion-body">
              <h4>{props.titulo}</h4>
              <ul className="list-group">
                {props.lista.map((elemento) => {
                  return (
                    <li key={elemento.name} className="list-group-item">
                      <a href={elemento.resourceURI}>{elemento.name}</a>
                    </li>
                  );
                })}
              </ul>
              </div>
          </div>
          </div>
         </>
      )
    );
  }
  
  export default ListaDeLinksStories;
  