import React from 'react';
//import '../index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';

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
      const handleChange = (val) => this.setState({page: val})
        return (
            <div className="app" >
              <Container fluid height="100%">
                <Navbar bg="dark">
                <ToggleButtonGroup name="pageSelect" type="radio" onChange={handleChange}>
                  <ToggleButton name="start" value="start">Index</ToggleButton>
                  <ToggleButton name="areaGraph" value="areaGraph">AreaGraph</ToggleButton>
                </ToggleButtonGroup>
                </Navbar>

                  {this.state.page === "start" &&
                   <IndexPage/>}
                  {this.state.page === "areaGraph" &&
                   <CovidAreaGraph/>}
              </Container>
            </div>
        );
    }
}
export default App;
