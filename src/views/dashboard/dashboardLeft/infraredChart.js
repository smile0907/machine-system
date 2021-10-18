import React, { useState } from 'react';
import { Divider, Card } from 'antd';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
    var data = [
        {
            x: '12p',
            y: 200,
        },
        {
            x: '3p',
            y: 700,
        },
        {
            x: '6p',
            y: 300,
        },
        {
            x: '9p',
            y: 260,
        },
        {
            x: '8P',
            y: 240,
        },
        {
            x: '3a',
            y: 220,
        },
        {
            x: '6a',
            y: 200,
        },
        {
            x: '9a',
            y: 200,
        },
    ];
    var config = {
        data: data,
        xField: 'x',
        yField: 'y',
        label: {},
        point: {
            size: 4,
            shape: 'circle',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: { showMarkers: false },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [{ type: 'marker-active' }],
        height: 180,
    };
    return (
        <Card size='small' headStyle={{border: 'none'}} title='Termografía Infrarroja'>
            <Line {...config} />
        </Card>
    );
};

export default DemoLine;
