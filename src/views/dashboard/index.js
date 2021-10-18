import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';
import DashboardLeft from './dashboardLeft';
import DashboardRght from './dashboardRight';

export default () => {
    return (
        <Dashboard>
            <Layout>
                <Row gutter={8}>
                    <Col span={13}><DashboardLeft /></Col>
                    <Col span={11}><DashboardRght /></Col>
                </Row>
            </Layout>
        </Dashboard>
    )
}

const Dashboard = styled.div`
    margin: 5px;
    padding: 5px;
`;
