import ListaDeLinks from "./ListaDeLinks";

function DetalleDeHeroe(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.heroe.thumbnail.path + "." + props.heroe.thumbnail.extension}
        alt={props.heroe.name}
      />
      <div className="card-body">
        <h5  className="card-title">
          {props.heroe.name}
        </h5>
      </div>
      {props.heroe.comics.items.length > 0 && (
          <ListaDeLinks lista={props.heroe.comics.items} />
  
      )}  
  </div>
  );
}

export default DetalleDeHeroe;
