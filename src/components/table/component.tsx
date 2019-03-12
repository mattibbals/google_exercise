import * as React from 'react';
import * as d3 from 'd3';
import { tabulate } from './drawTable';

interface Props {
    tsvPath?: string;
    csvPath?: string;
    uriPath?: string;
}

export class Table extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

        if (this.props.uriPath !== void(0)) {


            d3.json(this.props.uriPath)
                .then((data) => {
                    let new_data : any = [];
                    if (data instanceof Array) {
                        data.forEach((d) => {
                            new_data.push({
                                Date : d.Date,
                                ...d
                            });
                        });
                    }
                    const columns = Object.keys(new_data[0]);
                    tabulate(new_data, columns); 
                })
                .catch((err) => {
                    return console.warn(err);
                });
        } 
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div id="tableComponent" className="table-responsive"></div>
                </div>
            </div>
        );
    }
}