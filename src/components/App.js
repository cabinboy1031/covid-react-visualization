import React from 'react';
//import '../index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="app">
              <Container fluid>
                <Navbar bg="dark">
                  <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
                </Navbar>

                <Container>
                  <h1>Covid 19 Data visualizations</h1>
                  <h2>What is this place?</h2>
                  <p>
                    This website is a hobby project of mine that experiments with visualizing the covid-19 database from
                    the <a href="https://covidtracking.com/data/api">COVID Tracking Project</a> API.
                  </p>

                  <Alert variant='warning'>
                      This website will stay up as long as possible, although the COVID API is set to depreciate late april 2021.
                      There will be a new git branch that will use a local database rather than querying the online one once I feel
                      confident that I have made the visualizations stable.
                  </Alert>

                  <h2>Contact Information</h2>
                  <ListGroup>
                    <ListGroup.Item>Ian Hemmer</ListGroup.Item>
                    <ListGroup.Item>Github: cabinboy1031</ListGroup.Item>
                    <ListGroup.Item>Email: hemmerian@gmail.com</ListGroup.Item>
                  </ListGroup>
                </Container>
              </Container>
            </div>
        )
    }
}
export default App;
