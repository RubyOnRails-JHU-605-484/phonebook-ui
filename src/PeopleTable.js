import React from 'react'
import { Table } from 'semantic-ui-react'
import PersonRow from './PersonRow';

const PeopleTable = ({people}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            people.map(person => <PersonRow {...person} key={person.id} />)
        }
    </Table.Body>
  </Table>
)

export default PeopleTable
