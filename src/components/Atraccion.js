import React from "react";
import { Card, Button, Row} from "react-bootstrap";

class Atraccion extends React.Component {
  render() {
    return (
        
      <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src="/img/minecraft.png" />

        <Card.Body>
          <Card.Title>TITULOs</Card.Title>
          <Card.Text>texto del tanos mi perro </Card.Text>
          <Card.Subtitle>detalles de tanos aaaa tanos</Card.Subtitle>
          <Button variant="primary">Comprar</Button>
        </Card.Body>

      </Card>
    );
  }
}

export default Atraccion;    
