function ArticleContainer(props) {
    return <div className="container">{props.children}</div>;
}
function Title(props) {
  return <h1>{props.children}</h1>
}

function Paragraph(props) {
  return <div className="article">{props.children}</div>
}

function EnNegrita(props) {
  return <span className="bold">{props.children}</span>
}

function DeColorRojo(props) {
  return <span className="rojo">{props.children}</span>
}

export function App() {
  return (
    <ArticleContainer>
      <Title>
        Hola <i>Mundo</i>!
      </Title>
      <Paragraph>
        Párrafo de mi articulo
        <EnNegrita>
          <DeColorRojo>importante</DeColorRojo>
        </EnNegrita>!
      </Paragraph>
    </ArticleContainer>
    );
}
export default App;
