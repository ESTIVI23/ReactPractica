import React  from "react";
import Atraccion from "./components/Atraccion";
import { Container, Row } from "react-bootstrap";
/*class App extends React.Component{
render(){
     return <h2>hola Mundo </h2>;
}

};

export default App;  */
/*****************************************/


/*class App extends React.Component {

      render(){

             return <Atraccion // este es un componente

              img= "../img/jota.png"
              nombre = "tilcara"
              descipcion ="atraccion turistica Quebrada Humahuaca"
              valoracion = "Muy bien"></Atraccion>
      }

};
export default App;*/

function App (){
  return (
     <Container>
         <Row>
         {sitios.map((sitio,i) => // el i indica el lugar de cada atraccion 
          <Atraccion
          key={i}   // su identificador de cada  componente creada de atraccion creada
          img = {sitio.img}
          nombre = {sitio.nombre}
          descripcion ={sitio.descripcion}
          valoracion = {sitio.valoracion}
         
          ></Atraccion>
          )}</Row>
     </Container >);

}
export default App;