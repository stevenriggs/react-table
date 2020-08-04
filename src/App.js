import React from 'react';
import './App.css';
// react-bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import {records} from './Data';

class App extends React.Component {
  // {"id":1,"first_name":"Latia","last_name":"Turneaux","email":"lturneaux0@hhs.gov","gender":"Female","ip_address":"197.246.59.178"},
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>IP Address</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record=>
                  <tr>
                    <td>{record.id}</td>
                    <td>{record.first_name}</td>
                    <td>{record.last_name}</td>
                    <td>{record.gender}</td>
                    <td>{record.email}</td>
                    <td>{record.ip_address}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
