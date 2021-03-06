import React from 'react';
//import '../index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import IndexPage from './Index';
import CovidAreaGraph from './CovidVisuals'

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        page: "areaGraph",
      }
    }

    render() {
        return (
            <div className="app">
              <Container fluid>
                <Navbar bg="dark">
                  <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
                </Navbar>

                <Container>
                  {this.state.page === "start" &&
                   <IndexPage/>}
                  {this.state.page === "areaGraph" &&
                   <CovidAreaGraph/>}
                </Container>
              </Container>
            </div>
        );
    }
}
export default App;
