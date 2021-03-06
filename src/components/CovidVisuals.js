import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AreaChart,
         Area,
         XAxis,
         YAxis ,
         CartesianGrid,
         Tooltip
       } from 'recharts';

class CovidAreaGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {}
        }
    }

    componentDidMount(){
        fetch("https://api.covidtracking.com/v1/us/daily.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    response: data.reverse(),
                });
                console.log(this.state.response);
            });
    }

    render(){
        return(
                <Row>
                    <Col sm={4} class="dataSelect"> </Col>
                    <Col sm={8}>
                        <AreaChart width={1000} height={700} data={this.state.response} margin={{top:5, right:20, bottom:50, left:20}}>
                            <Area type="monotone" dataKey="hospitalizedCurrently" stroke="#4484ff" />
                            <Area type="monotone" dataKey="deathIncrease" stroke="#000000" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="date" angle={-45} interval={10} textAnchor="end"/>
                            <YAxis />
                            <Tooltip/>
                        </AreaChart>
                    </Col>
                </Row>
        );
    }
}

export default CovidAreaGraph;
