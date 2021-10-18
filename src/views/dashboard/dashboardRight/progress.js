import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Progress, Card } from 'antd';

const { Panel } = Collapse;

export default () => {
    const textStyle = {
        margin: 0,
        padding: 0,
    }
    return (
        <Card size='small'>
            <p style={textStyle}> Seguimiento </p>
            <Progress percent={40} />
            <p style={textStyle}> Inaceptable </p>
            <Progress percent={67} />
            <p style={textStyle}> Satisfactorio </p>
            <Progress percent={89} />
            <p style={textStyle}> Insatisfactorio </p>
            <Progress percent={55} />
            <p style={textStyle}> Bueno </p>
            <Progress percent={99} />
            <p style={textStyle}> Equipo Detenido </p>
            <Progress percent={99} />
        </Card>
    )
}
