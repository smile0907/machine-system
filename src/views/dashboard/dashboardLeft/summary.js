import React, { useState } from 'react';
import { Progress, Card } from 'antd';

export default () => {
    const headStyle = {
        border: 'none',
    }
    const bodyStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    const itemStyle = {
        textAlign: 'center',
    }
    return (
        <Card title='Resumen' size='small' bodyStyle={bodyStyle} headStyle={headStyle}>
            <div style={itemStyle}>
                <Progress type='circle' percent={30} width={70} />
                <p> Equipos </p>
            </div>
            <div style={itemStyle}>
                <Progress type='circle' percent={70} width={70} />
                <p> Profesionales </p>
            </div>
            <div style={itemStyle}>
                <Progress type='circle' percent={50} width={70} />
                <p> Áreas </p>
            </div>
        </Card>
    )
}
