import React from 'react';
//import '../index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import IndexPage from './Index';
import CovidAreaGraph from './CovidVisuals'

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        page: "start",
      }
    }

    render() {
        return (
            <div className="app" >
              <Container fluid height="100%">
                <Navbar bg="dark">
                  <Button variant="primary" onClick={() => {this.setState({page:"start"})}}>COVID-19</Button>
                  <Button variant="primary" onClick={() => {this.setState({page:"areaGraph"})}}>Line Graph </Button>
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
