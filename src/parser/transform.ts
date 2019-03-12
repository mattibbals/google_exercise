import * as d3 from 'd3';

export const jsonTransform = (data : any, formatDate : any) => {
    const parseTime = d3.timeParse(formatDate);
    let result : any = [];
    data.forEach((d : any) => {
        Object.keys(d).forEach(function(key,index) {
            if (key !== 'Date') {
                if (d[key] !== null) {
                    result.push({
                        columnKey: key,
                        date: parseTime(d.Date),
                        value: d[key]
                    });
                }
            }
        });
    });
    return result;
}
