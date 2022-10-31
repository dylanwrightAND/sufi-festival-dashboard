import React from 'react';
import { Table } from 'semantic-ui-react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Attendees({ attendees }) {
  console.log(attendees);
  return (
    <>
      <h1>Attendees</h1>

      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Checked In</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {attendees.map((a, index) => {
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
