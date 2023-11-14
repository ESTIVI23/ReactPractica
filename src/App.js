import React  from "react";
import Atraccion from "./components/Atraccion";
import sitios from './data/sitiosJujuy.json';
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

              img= "../img/jaaaota.png"
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
          k ey={i}   // su identificador de cada  componente creada de atraccion creada
          img = {sitio.img}
          nombre = {sitio.nombre}
          description ={sitio.description}
          valoracion = {sitio.valoracion}
         
          ></Atraccion>
             
          )}</Row>
     </Container >);

}
export default App;