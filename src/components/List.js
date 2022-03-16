import React from 'react'
import { Container, Table } from 'react-bootstrap'

const List = ({reports}) => {

  return (
    <>
      <Container>
        <br />
        <h3>Unmatched Reports</h3>
        <Table striped bordered hover size="sm" >
        { reports?.length > 0 ? reports.map((report) => (
          <>
          <thead>
            <tr>
              <th colSpan="3">{report.file_name}</th>
            </tr>
            <tr>
              <th>Date</th>
              <th>Reference</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {report.unmatched_records.map((record) => (
              <tr key={record.TransactionID}>
                <td>{record.TransactionDate}</td>
                <td>{record.WalletReference}</td>
                <td>{record.TransactionAmount}</td>
              </tr>
            ))}
          <br />
          </tbody>
          </>
        )): <p>Nothing to see here...</p>}
      </Table>
      </Container>
    </>
  )
}

export default List