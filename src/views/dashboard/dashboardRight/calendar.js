import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Calendar, Card } from 'antd';

const { Panel } = Collapse;

export default () => {
    return (
        <Card title='calendar' size='small'>
            <Calendar fullscreen={false} />
        </Card>
    )
}
