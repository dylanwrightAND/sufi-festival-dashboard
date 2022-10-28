import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Organisation({ organisations }) {
  return (
    <div>
      <h1>Organisation</h1>

      {organisations.map((o, index) => (
        <Card key={`org-${index}`} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./public/eventbrite.png" />
          <Card.Body>
            <Card.Title>{o.name}</Card.Title>
            <Card.Text>Eventbrite Organisation</Card.Text>
            <Link href={`/organisation/${o.id}`}>
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
