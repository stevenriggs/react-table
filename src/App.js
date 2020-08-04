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
    const tableHeight = window.innerHeight + 'px'
    console.log(tableHeight)
    const styles = {
      tablecol: {
        height: tableHeight,
        overflow: 'auto'
      },
      container: {
    
      },
      right: {
        height: window.innerHeight, // I want to change this
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        backgroundColor: 'yellow'
      },
      left: {
        overflowY: '100%',
        padding: 0,
        height: window.innerHeight,
        paddingBottom: '50px',
        backgroundColor: 'white'
      },
      row: {
        marginBottom: 0
      }
    }

    return (
      <Container fluid>
        <Row>
          <Col>
            Hi there
          </Col>
        </Row>
        <Row>
          <Col style={{ height: `calc(100vh - 50px)`, overflow: 'auto' }}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>ID</th>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>First Name</th>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>Last Name</th>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>Email</th>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>Gender</th>
                  <th style={{ background: 'white', position: 'sticky', top: 0 }}>IP Address</th>
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
