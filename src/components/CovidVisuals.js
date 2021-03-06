import React from 'react';
import { LineChart,
         Line,
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
                    response: data,
                });
                console.log(this.state.response);
            });
    }

    render(){
        return(
            <LineChart width={1200} height={600} data={this.state.response}>
                <Line type="monotone" dataKey="hospitalizedCurrently" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip/>
            </LineChart>
        );
    }
}

export default CovidAreaGraph;
