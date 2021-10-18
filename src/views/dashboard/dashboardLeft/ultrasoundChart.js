import React, { useState } from 'react';
import { Divider, Card } from 'antd';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
    var data = [
        {
            x: 'M',
            y: 15,
        },
        {
            x: 'T',
            y: 20,
        },
        {
            x: 'W',
            y: 12,
        },
        {
            x: 'U',
            y: 10,
        },
        {
            x: 'F',
            y: 30,
        },
        {
            x: 'S',
            y: 35,
        },
        {
            x: 'Y',
            y: 17,
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
        <Card size='small' headStyle={{border: 'none'}} title='Ultrasonido Aerotransportado'>
            <Line {...config} />
        </Card>
    );
};

export default DemoLine;
