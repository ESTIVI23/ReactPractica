import React  from "react";
import Atraccion from "./components/Atraccion";
/*class App extends React.Component{
render(){
     return <h2>hola Mundo </h2>;
}

};

export default App;  */

class App extends React.Component {

      render(){

             return <Atraccion // este es un componente

              img= "../img/minecraft.png"
              nombre = "tilcara"
              descipcion ="atraccion turistica Quebrada Humahuaca"
              valoracion = "Muy bien"></Atraccion>
      }

};
export default App;    