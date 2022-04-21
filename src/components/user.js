import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import {UserDetails} from '../components/user_details'
import {Link} from 'react-router-dom'

export const  User= ({data}) => {
    
        console.log(data);
    
  return (
    




    <Container>
            <Row s={2} md={2} className="g-4">
         <Col>    
        {data.map((item, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={item.avatar} />
          <Card.Body>
            <Card.Title>{item.first_name}{item.last_name} </Card.Title>
            <Card.Text>
             
            </Card.Text>click here for user details 
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Col> 
  </Row>
        </Container>
  )
}
