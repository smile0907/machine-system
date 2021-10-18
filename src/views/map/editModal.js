import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Button, Input, Select } from 'antd';
import { mapEdit } from './api';

const { TextArea } = Input;
const { Item } = Form;
const { Option } = Select;

const LocationForm = connect(
    state => ({ maps: state.maps }),
)(({ position, maps, initial, onCancel }) => {
    const { loading } = maps;
    const { type, location, condition, contribution, programme_detail } = initial;
    const onFinish = (data) => {
        let mapData = data;
        mapData.id = initial._id;
        mapEdit(mapData);
        onCancel();
    };

    const [ form ] = Form.useForm();
    type && form.setFieldsValue({ type, location, condition, contribution, programme_detail });

    return (
        <Form form={form} name="map_edit" onFinish={onFinish}>
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
                <Select>
                    <Option value="Rallye"> Rallye </Option>
                    <Option value="Design"> Design Custom </Option>
                    <Option value="Location"> Location </Option>
                    <Option value="Car Dealer"> Car Dealer </Option>
                </Select>
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

export default ({ visible, onCancel, initial }) => {
    return (
        <Modal
            visible={visible}
            footer={null}
            onCancel={onCancel}
            title={`${initial.type} Edit`}
        >
            <LocationForm onCancel={onCancel} initial={initial} />
        </Modal>
    )
}
