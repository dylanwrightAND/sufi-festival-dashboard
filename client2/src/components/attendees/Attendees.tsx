import React from 'react';
import { Table } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Attendees({ attendees, event }: any) {
  console.log(event);
  return (
    <>
      <h1></h1>
      <Segment.Group horizontal>
        <Segment color="orange" padded="very">
          Event Name: {event.name.text}
        </Segment>
        <Segment color="orange" padded="very">
          Event Attendees: {attendees.length}
        </Segment>
        <Segment color="orange" padded="very">
          Event Capacity: {event.capacity}
        </Segment>
      </Segment.Group>

      <Table striped color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Checked In</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {attendees.map((a: any, index: number) => {
            return (
              <>
                <Table.Row key={`attendee-${index}`}>
                  <Table.Cell>{a.name}</Table.Cell>
                  <Table.Cell>{a.email}</Table.Cell>
                  <Table.Cell>{a.checked_in.toString()}</Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
