import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const PersonRow = ({first_name: firstName, last_name: lastName, phone, email}) => (
      <Table.Row>
        <Table.Cell><Icon name='address card'/>{lastName}</Table.Cell>
        <Table.Cell>{firstName}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
      </Table.Row>
)

export default PersonRow
