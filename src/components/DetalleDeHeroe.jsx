import ListaDeLinksComics from "./ListaDeLinksComics";
import ListaDeLinksStories from "./ListaDeLinksStories";
import ListaDeLinksSeries from "./ListaDeLinksSeries";

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
          <ListaDeLinksComics lista={props.heroe.comics.items} />
  
      )}  
      {props.heroe.stories.items.length > 0 && (
          <ListaDeLinksStories lista={props.heroe.stories.items} />
  
      )}  
      {props.heroe.series.items.length > 0 && (
          <ListaDeLinksSeries lista={props.heroe.series.items} />
  
      )}  
  </div>
  );
}

export default DetalleDeHeroe;
