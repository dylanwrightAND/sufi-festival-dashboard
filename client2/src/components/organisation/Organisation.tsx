import React from "react";
import Link from "next/link";
import { Button, Card, Image } from "semantic-ui-react";

export default function Organisation({ organisations }: any) {
  return (
    <div>
      <h1>Organisation</h1>

      <Card.Group>
        {organisations.map((o: any, index: number) => (
            <Card key={`org-${index}`}>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="/eventbrite.png"
                  alt="EvEnT iMaGe"
                />
                <Card.Header>Eventbrite Organisation</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Link href={`/organisation/${o.id}`}>
                  <Button content="Go to Event" />
                </Link>
              </Card.Content>
            </Card>
        ))}
      </Card.Group>
    </div>
  );
}
