import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Select, Button, Card, Form, Input, Space, Switch } from 'antd';
import { FIELD_TYPES } from "./constants";

const FormBuilder = ({ form, setIsModalOpen }) => {
    const [selectedFields, setSelectedFields] = useState(["input"]);

    const onFinish = (values) => {
        console.log("values", values);
        setIsModalOpen(false);
    };

    return (
        <div className='form-builder-container'>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                form={form}
                onFinish={onFinish}
                name="form_builder"
                autoComplete="off"
                initialValues={{
                    items: [{}],
                    fieldType: "input",
                }}
            >
                <Form.Item
                    label="Form Name"
                    name="formName"
                    rules={[{ required: true, message: 'Please enter form name' }]}
                >
                    <Input />
                </Form.Item>

                <Form.List name="items">
                    {(fields, { add, remove }) => (
                        <div
                            style={{
                                display: 'flex',
                                rowGap: 16,
                                flexDirection: 'column',
                            }}
                        >
                            {fields.map((field, index) => (
                                <Card
                                    size="small"
                                    title={`Field ${index + 1}`}
                                    key={field.key}
                                    extra={
                                        <CloseOutlined
                                            onClick={() => {
                                                remove(field.name);
                                                setSelectedFields(prevFields => {
                                                    const newFields = [...prevFields];
                                                    newFields.splice(index, 1); // Remove selected field type for removed field
                                                    return newFields;
                                                });
                                            }}
                                        />
                                    }
                                >
                                    <Form.Item
                                        label="Field Type"
                                        name={[field.name, 'fieldType']}
                                        rules={[{ required: true, message: 'Please select the filed type' }]}
                                    >
                                        <Select
                                            style={{
                                                width: 200,
                                            }}
                                            options={FIELD_TYPES}
                                            placeholder="Select Field"
                                            onChange={(value) => {
                                                setSelectedFields(prevFields => {
                                                    const newFields = [...prevFields];
                                                    newFields[index] = value; // Update selected field type for the current field
                                                    return newFields;
                                                });
                                            }}
                                        />
                                    </Form.Item>
                                    {/* Rendering the component based on selected field type */}
                                    {selectedFields[index] === "input" && (
                                        <>
                                            <Form.Item
                                                label="Label Name"
                                                name={[field.name, 'label_name']}
                                                rules={[{ required: true, message: 'Please enter the label name' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Required" name={[field.name, 'required']} valuePropName="checked">
                                                <Switch />
                                            </Form.Item>
                                        </>
                                    )}
                                    {(selectedFields[index] === "dropdown"
                                        || selectedFields[index] === "checkbox"
                                        || selectedFields[index] === "radio") && (
                                            <>
                                                <Form.Item
                                                    label="Label Name"
                                                    name={[field.name, 'label_name']}
                                                    rules={[{ required: true, message: 'Please enter the label name' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Options">
                                                    <Form.List name={[field.name, 'options']}>
                                                        {(subFields, subOpt) => (
                                                            <Space direction="vertical">
                                                                {subFields.map((subField) => (
                                                                    <Space key={subField.key} align="baseline">
                                                                        <Form.Item
                                                                            {...subField}
                                                                            name={[subField.name, 'option']}
                                                                            fieldKey={[subField.fieldKey, 'option']}
                                                                            rules={[{ required: true, message: 'Missing option' }]}
                                                                        >
                                                                            <Input placeholder="Option" />
                                                                        </Form.Item>
                                                                        <CloseOutlined
                                                                            onClick={() => {
                                                                                subOpt.remove(subField.name);
                                                                            }}
                                                                        />
                                                                    </Space>
                                                                ))}
                                                                <Button
                                                                    type="dashed"
                                                                    onClick={() => subOpt.add()}
                                                                    block
                                                                >
                                                                    Add Option
                                                                </Button>
                                                            </Space>
                                                        )}
                                                    </Form.List>
                                                </Form.Item>
                                                <Form.Item label="Required" name={[field.name, 'required']} valuePropName="checked">
                                                    <Switch />
                                                </Form.Item>
                                            </>
                                        )}


                                    {selectedFields[index] === "upload" && (
                                        <>
                                            <Form.Item
                                                label="Label Name"
                                                name={[field.name, 'label_name']}
                                                rules={[{ required: true, message: 'Please enter the label name' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Supported Formats" name={[field.name, 'supported_format']}>
                                                <Input placeholder="pdf, gif, png" />
                                            </Form.Item>
                                            <Form.Item label="Required" name={[field.name, 'required']} valuePropName="checked">
                                                <Switch />
                                            </Form.Item>
                                        </>
                                    )}
                                </Card>
                            ))}

                            <Button type="dashed" onClick={() => add()} block>
                                + Add Field
                            </Button>
                        </div>
                    )}
                </Form.List>
                <Form.Item
                    style={{ display: 'flex', marginTop: '20px', marginRight: '30px', justifyContent: 'right' }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormBuilder;
