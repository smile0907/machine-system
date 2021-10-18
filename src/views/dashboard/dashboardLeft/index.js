import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Collapse, Col, Row, Divider } from 'antd';
import { Scrollbars } from "react-custom-scrollbars";
import Summary from './summary';
import VibrationChart from './vibrationChart';
import InfraredChart from './infraredChart';
import UltrasoundChart from './ultrasoundChart';

const { Panel } = Collapse;

export default connect(
    state => ({ app: state.index }),
)(({ app = {} }) => {
    return (
        <Left>
            <Collapse defaultActiveKey={[1]}>
                <Panel key={1} header='Inicio'>
                    <Scrollbars style={{height: app.height - 185}}>
                        <Summary />
                        <br />
                        <VibrationChart />
                        <br />
                        <InfraredChart />
                        <br />
                        <UltrasoundChart />
                    </Scrollbars>
                </Panel>
            </Collapse>
        </Left>
    )
})

const Left = styled.div`
    margin: 5px;
    padding: 5px;
`;
