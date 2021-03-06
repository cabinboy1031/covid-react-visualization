import React from 'react';
import ReactDOMServer from 'react-dom/server'
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
            response: {},
            memo:''
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
                this.setState(
                    {memo:ReactDOMServer.renderToString(
                        <LineChart width={1200} height={600} data={data}>
                            <Line type="monotone" dataKey="hospitalizedCurrently" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip/>
                        </LineChart>
                    )}
                );
            });
            
    }

    render(){
        return(
            <div dangerouslySetInnerHTML={{ __html: this.state.memo }} />
        );
    }
}

export default CovidAreaGraph;
