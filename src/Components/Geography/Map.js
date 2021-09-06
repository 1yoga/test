import {Chart} from "react-google-charts";

export let Map = (props) => {
    return (
    <Chart
        width={'1000px'}
        height={'600px'}
        chartType="GeoChart"
        data={props.data}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '1' }}
        options={{
            colorAxis: {
                minValue: props.minValue,
                maxValue: props.maxValue,
                colors: ['#FFCDCD','#FF8181', '#FF4C4C', '#FF1212', '#E70000', '#810000', '#4B0000'],
            },
            backgroundColor: '#81d4fa',
            defaultColor: '#f5f5f5',
            magnifyingGlass: {enable: true, zoomFactor: 100}
        }}
    />
    )
}