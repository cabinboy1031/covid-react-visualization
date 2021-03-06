import React from 'react';

import Container from 'react-bootstrap/Container';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';


class CovidAreaGraph extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            categories: ["one", "two", "three", "four"],
            casesSeries: [39, 10, 34, 12],
            deathsSeries: [23, 5, 10, 6]
        };
    }

    componentDidMount(){
        const apiURL="https://api.covidtracking.com/"
        const usCurrentURL = apiURL + "v1/us/daily.json";

        var dates = [];
        var cases = [];
        var deaths = [];

        fetch(usCurrentURL)
            .then((response) => response.json())
            .then((data) => data.forEach(
                (result) => {
                    dates.push(result.date);
                    cases.push(result.hospitalized);
                    deaths.push(result.death);
                }));

        this.setState((state, props) => {
            return {
            categories: dates,
            casesSeries: cases,
            deathsSeries: deaths
            };
        });
    }

    render() {
        const {categories, casesSeries, deathsSeries} = this.state;
        return (
            <Container>
                <Chart>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories}/>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem type="area" data={casesSeries} color="blue" opacity={0.5}/>
                        <ChartSeriesItem type="area" data={deathsSeries} color="gray" opacity={0.5}/>
                    </ChartSeries>
                </Chart>
            </Container>
        );
    }
}

export default CovidAreaGraph;
