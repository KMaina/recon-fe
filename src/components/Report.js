import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Report = ({reports}) => {
  return (
    <>
      <Container>
      <br />
      <h3>Report</h3>
        <Row>
        { reports?.length > 0 ? reports.map((report) => (
          <Col key={report.file_name}>
            <Card className="text-center">
              <Card.Header><b>{report.file_name}</b></Card.Header>
              <Card.Body>
                <Card.Text>
                Total records: {report.total_records}
                </Card.Text>
                <Card.Text>
                Matching records: {report.matching}
                </Card.Text>
                <Card.Text>
                Unmatched records: {report.unmatched_records_length}
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          )) : <p>Nothing to see here...</p>}
        </Row>
      </Container>
    </>
  )
}

export default Report