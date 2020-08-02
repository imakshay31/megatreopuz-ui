import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
export const data = [{
    day: "Day 1",
    myScore: 1,
    topperScore: 3
}, {
    day: 'Day 2',
    myScore: 1,
    topperScore: 4

}, {
    day: 'Day 3',
    myScore: 3,
    topperScore: 2
}, {
    day: 'Day 4',
    myScore: 4,
    silver: 13,
    topperScore: 3
}, {
    day: 'Day 5',
    myScore: 2,
    topperScore: 3
}, {
    day: 'Day 6',
    myScore: 3,
    topperScore: 3
}];


const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
//@ts-ignore
const legendRootBase = ({ classes, ...restProps }) => (
    //@ts-ignore
    <Legend.Root {...restProps} className={classes.root} />
);
//@ts-ignore
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
    label: {
        whiteSpace: 'nowrap',
    },
});
const legendLabelBase = ({ classes, ...restProps }) => (
    //@ts-ignore
    <Legend.Label className={classes.label} {...restProps} />
);
//@ts-ignore
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);


export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        //@ts-ignore
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis />

                    <BarSeries
                        name="Your Streak"
                        valueField="myScore"
                        argumentField="day"
                        color="#2BB1C5"
                    />
                    <BarSeries
                        name="Toppers Strak"
                        valueField="topperScore"
                        argumentField="day"
                        color="#E8403C"
                    />

                    <Animation />
                    {/*@ts-ignore */}
                    <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
                    <Title text="Compare yourself with topper" />
                    <Stack />
                </Chart>
            </Paper>
        );
    }
}
