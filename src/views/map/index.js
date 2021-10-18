import React from 'react';
import { connect } from 'react-redux';
import { Form, Card } from 'antd';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { RallyIcon, DesignIcon, CarIcon, LocationIcon } from './icon';
import './asserts/style.css';

const { Item } = Form;

export default connect(
    state => ({ app: state.index, mapArray: state.maps }),
)(({ app, mapArray }) => {
    const { maps } = mapArray;

    return (
        <Map
            style={{
                position: 'absolute',
                width: app.width - 230,
                height: app.height - 60,
            }}
            center={[51.505, -0.09]} zoom={20} scrollWheelZoom={true} //This is the part of controlling scroll...
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayersControl position="topright" collapsed={false}>
                <LayersControl.Overlay name=" Rallye">
                    <LayerGroup>
                        {
                            maps.map((data, key) =>
                            (data.type==='Rallye') && (
                                <Marker key={key} position={data.position} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name=" Design & Custom">
                    <LayerGroup>
                        {
                            maps.map((data, key) =>
                            (data.type==='Design') && (
                                <Marker key={key} position={data.position} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name=" Location">
                    <LayerGroup>
                        {
                            maps.map((data, key) =>
                            (data.type==='Location') && (
                                <Marker key={key} position={data.position} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name=" Car Dealer">
                    <LayerGroup>
                        {
                            maps.map((data, key) =>
                            (data.type==='Car Dealer') && (
                                <Marker key={key} position={data.position} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
            {maps.map((data, index)=>(
                <Marker icon={
                    (data.type==="Rallye") ? RallyIcon
                        : (data.type==='Design') ? DesignIcon
                        : (data.type==='Location') ? LocationIcon : CarIcon
                } position={data.position} key={index}>
                    <Popup>
                        <Card
                            style={{margin: "20px auto", width: 300}}
                            bodyStyle={{padding: "10px 25px"}}
                            title={data.type}
                        >
                            <Item
                                style={{
                                    marginBottom: 5
                                }}
                                labelCol={{
                                    span: 8,
                                }} wrapperCol={{
                                    span: 16,
                                }} label="Location" labelAlign="left"> {data.location} </Item>
                            <Item
                                style={{
                                    marginBottom: 5
                                }}
                                labelCol={{
                                    span: 8,
                                }} wrapperCol={{
                                    span: 16,
                                }} label="Condition" labelAlign="left"> {data.condition} </Item>
                            <Item
                                style={{
                                    marginBottom: 5
                                }}
                                labelCol={{
                                    span: 8,
                                }} wrapperCol={{
                                    span: 16,
                                }} label="Contribution" labelAlign="left"> {data.contribution} </Item>
                            <Item
                                style={{
                                    marginBottom: 5
                                }}
                                labelCol={{
                                    span: 12,
                                }} wrapperCol={{
                                    span: 12,
                                }} label="Programme detail" labelAlign="left"> {data.programme_detail} </Item>
                            <Item
                                style={{
                                    marginBottom: 5
                                }}
                                labelCol={{
                                    span: 8,
                                }} wrapperCol={{
                                    span: 16,
                                }} label="Created" labelAlign="left"> {data.createdAt.slice(0, 10)} {data.createdAt.slice(11, 16)} </Item>
                            <Item
                                labelCol={{
                                    span: 8,
                                }} wrapperCol={{
                                    span: 16,
                                }} label="Updated" labelAlign="left"> {data.updatedAt.slice(0, 10)} {data.updatedAt.slice(11, 16)} </Item>
                        </Card>
                    </Popup>
                </Marker>
            ))}
        </Map>
    )
})
