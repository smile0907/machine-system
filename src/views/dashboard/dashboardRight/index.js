import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from "react-custom-scrollbars";
import { Collapse, Col, Row, Divider } from 'antd';
import ProgressBar from './progress';
import CalendarBar from './calendar';

const { Panel } = Collapse;

export default connect(
    state => ({ app: state.index }),
)(({ app }) => {
    return (
        <Right>
            <Collapse defaultActiveKey={[1]}>
                <Panel key={1} header='Estado de Equipos'>
                    <Scrollbars style={{height: app.height - 185}}>
                        <ProgressBar />
                        <br />
                        <CalendarBar />
                    </Scrollbars>
                </Panel>
            </Collapse>
        </Right>
    )
})

const Right = styled.div`
    margin: 5px;
    padding: 5px;
`;
