import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Organisation({ organisations }) {
  return (
    <div>
      <h1>Organisation</h1>

      <ul>
        {organisations.map((o, index) => (
          <li key={`org-${index}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{o.name}</Card.Title>
                <Card.Text>Eventbrite Organisation</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
