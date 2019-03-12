import * as React from 'react';
import * as d3 from 'd3';
import { ScaleTime, ScaleLinear, ScaleOrdinal, Line, Selection, DSVRowString, Axis } from 'd3';
import { drawChart } from './drawChart';
import { jsonTransform } from '../../../parser/transform';
import { number } from 'prop-types';

interface Props {
    tsvPath?: string;
    uriPath?: string;
    csvPath?: string;
    dateFormat?: string;
    height?: string
    legendAxisY: string;
}

export class MultiLineChart extends React.Component<Props, {}> {
    constructor(props : any) {
        super(props);
    }
    componentDidMount() {
        const dateFormat : any = this.props.dateFormat;
        const height : any = this.props.height;
        const legendAxisY = this.props.legendAxisY;
        
        if (this.props.uriPath !== void(0)) {

            d3.json(this.props.uriPath)
                .then((data) => {
                    const dataTransformed : any = jsonTransform(data, dateFormat);
                    drawChart(dataTransformed, legendAxisY, height, dateFormat); 
                })
                .catch((err) => {
                    return console.warn(err);
                });
        } 
    }
    render() {
        return (
            <svg id="chart"></svg>
        );
    }
}