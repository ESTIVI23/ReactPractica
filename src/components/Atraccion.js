import React from "react";
import { Card, Button, Row} from "react-bootstrap";

/*class Atraccion extends React.Component {
  render() {
    return (
        
      <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={this.props.img} />  // usamos pros  para que usea lo qe pusimos en app atracion      

        <Card.Body>
         
          <Card.Title>{this.props.nombre}</Card.Title>
          <Card.Text>{this.props.descipcion} </Card.Text>
          <Card.Subtitle>{this.props.valoracion}</Card.Subtitle>
          <Button variant="primary">Comprar</Button>
        </Card.Body>

      </Card>
    );
  }
}

export default Atraccion;  */  

function Atraccion (props){  // tiene qe tener si o si el parametro

   return (
   <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={props.img} /> 

        <Card.Body>
         
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>{props.description} </Card.Text>
          <Card.Subtitle>{props.valoracion}</Card.Subtitle>
          <Button variant="primary">Comprar</Button>
        </Card.Body>

      </Card>
   
   );
} 
export default Atraccion;