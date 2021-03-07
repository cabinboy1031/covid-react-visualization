import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import randomColor from 'randomcolor';

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
            response: {},
            activeAreas: [],
        }
    }

    componentDidMount(){
        //fetch("https://api.covidtracking.com/v1/states/or/daily.json")
        fetch("https://api.covidtracking.com/v1/us/daily.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    response: data.reverse(),
                });
            });
    }

    render(){
        const setAreas = (val) => {
            var areas = [];
            for(var i = 0; i < val.length; i++){
                areas.push(val[i]);
            }
            console.log(areas);
            this.setState({activeAreas: areas});
        };
        const getAreas = () => {
            var renderedAreas = [];
            for(var i = 0; i < this.state.activeAreas.length; i++){
                renderedAreas.push(
                    <Area type="monotone" dataKey={this.state.activeAreas[i]} stroke={randomColor()}/>
                );
            }
            return renderedAreas;
        }

        return(
                <Row>
                    <Col lg={4}>
                        <h2> total hospitalizations compared to number of deaths</h2>
                        <p>
                            This is extremely easy to add and remove data points. Choose some of the options below
                            to see some of the results.
                        </p>

                        <ToggleButtonGroup size="lg" type="checkbox" variant="secondary" onChange={setAreas} vertical={true}>
                            <ToggleButton value="hospitalizedCurrently">Hospitalized</ToggleButton>
                            <ToggleButton value="deathIncrease" >Deaths by Day</ToggleButton>
                            <ToggleButton value="positiveIncrease">Cases</ToggleButton>
                            <ToggleButton value="inIcuCurrently">Patients in ICU</ToggleButton>
                        </ToggleButtonGroup>

                        <h2> Interesting finds </h2>
                        <ul>
                            <li> While deaths are really small. Hospitalizations are near 80% of the cases diagnosed.</li>
                            <li> The number of patients that need to be in the ICU of those diagnosed are about 1 in 10.</li>
                            <li> The month with the highest death count recorded was Feburary 20201 </li>
                        </ul>
                    </Col>
                    <Col lg={8}>
                        <AreaChart width={1000} height={700} data={this.state.response} margin={{top:5, right:20, bottom:50, left:20}}>
                            {getAreas()}
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
