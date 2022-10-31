import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Event({ events }) {
  return (
    <div>
      <h1>Events</h1>

      {events.map((e, index) => (
        <Card key={`org-${index}`} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" alt="image" />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              {e.quantity_sold}/{e.quantity_total}
            </Card.Text>
            <Link href={`/event/${e.id}`}>
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
