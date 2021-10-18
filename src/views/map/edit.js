import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { Form, Button, Input, Card, Radio, Collapse } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { mapSave, mapRemove } from './api';
import { RallyIcon, DesignIcon, CarIcon, LocationIcon } from './icon';
import EditModal from './editModal';
import './asserts/style.css';

const { Panel } = Collapse;
const { Item } = Form;
const { Group } = Radio;
const { TextArea } = Input;

const LocationForm = connect(
    state => ({ maps: state.maps }),
)(({ position, maps }) => {
    const { loading } = maps;
    const onFinish = (data) => {
        let mapData = data;
        mapData.position = position;
        mapSave(mapData);
    };
    return (
        <Form name="map_manage" onFinish={onFinish}>
            <Item
                name="type"
                validateTrigger="onSubmit"
                rules={[
                    {
                        required: true,
                        message: 'Please select type...',
                    },
                ]}
            >
                <Group>
                    <Radio style={{width: 100}} value="Rallye"> Rallye </Radio>
                    <Radio style={{width: 100}} value="Design"> Design Custom </Radio>
                    <Radio style={{width: 100}} value="Location"> Location </Radio>
                    <Radio style={{width: 100}} value="Car Dealer"> Car Dealer </Radio>
                </Group>
            </Item>
            <Item
                name="location"
                validateTrigger="onSubmit"
                rules={[
                    {
                        required: true,
                        message: 'Please input location...',
                    },
                ]}
            >
                <Input placeholder="Input location..." />
            </Item>
            <Item
                name="condition"
                validateTrigger="onSubmit"
                rules={[
                    {
                        required: true,
                        message: 'Please input condition...',
                    },
                ]}
            >
                <Input placeholder="Input condition..." />
            </Item>
            <Item
                name="contribution"
                validateTrigger="onSubmit"
                rules={[
                    {
                        required: true,
                        message: 'Please input contribution...',
                    },
                ]}
            >
                <Input placeholder="Input contribution..." />
            </Item>
            <Item
                name="programme_detail"
                validateTrigger="onSubmit"
                rules={[
                    {
                        required: true,
                        message: 'Please input programme detail...',
                    },
                ]}
            >
                <TextArea
                    placeholder="Input programme detail..."
                />
            </Item>
            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    Confirm
                </Button>
            </Item>
        </Form>
    )
})

export default connect(
    state => ({ app: state.index, mapArray: state.maps }),
)(({ app, mapArray }) => {
    const { maps } = mapArray;
    const [ position, setPosition ] = useState([0, 0]);
    const [ map, setMap ] = useState(null);
    const [ visible, setVisible ] = useState(false);
    const [ initial, setInitial ] = useState({});

    const onCancel = () => setVisible(false);
    const onEdit = (data) => {
        setInitial(data);
        setVisible(true);
    }

    return (
        <Map
            style={{
                position: 'absolute',
                width: app.width - 230,
                height: app.height - 60,
                cursor: "pointer",
            }}
            center={[51.505, -0.09]} zoom={20} scrollWheelZoom={true} //This is the part of controlling scroll...
            onClick={(e)=>setPosition(e.latlng)}
            whenReady={setMap}
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
            { map && (
            <Marker
                position={ position }
            >
                <Popup permanent opacity={1}>
                    <LocationForm position={ position } />
                </Popup>
            </Marker>)}

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
                            title={(
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <div> {data.type} </div>
                                    <div>
                                        <Button
                                            onClick={()=>onEdit(data)}
                                            icon={
                                                <EditOutlined />
                                            }
                                            size="small" type="primary" ghost
                                        > Edit </Button>&nbsp;&nbsp;&nbsp;
                                        <Button
                                            onClick={()=>mapRemove({id: data._id})}
                                            icon={
                                                <DeleteOutlined />
                                            } size="small" type="danger"> Delete </Button>
                                    </div>
                                </div>
                            )}
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
            <EditModal
                visible={visible}
                onCancel={onCancel}
                initial={initial}
            />
        </Map>
    )
})
