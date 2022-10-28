import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Event({ events }) {
  return (
    <div>
      <h1>Events</h1>

      <ul>
        {events.map((e, index) => (
          <li key={`org-${index}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  {e.quantity_sold}/{e.quantity_total}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
