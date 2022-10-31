import React from "react";
import Link from "next/link";
import { Button, Card, Image } from "semantic-ui-react";

export default function Event({ events }: any) {
  return (
    <div>
      <h1>Events</h1>

      <Card.Group>
        {events.map((e: any, index: number) => (
          <Card key={`event-${index}`}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/eventbrite.png"
                alt="EvEnT iMaGe"
              />
              <Card.Header>Eventbrite Organisation</Card.Header>
              <Card.Meta>
                {e.quantity_sold}/{e.quantity_total}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Link href={`/event/${e.id}`}>
                <Button content="Go to Event" />
              </Link>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
