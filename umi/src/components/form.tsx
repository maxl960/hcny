import React, { Component, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
interface FormItem {
    name: string;
    label: string;
    type: string;
    rules: object;
}
function FormComp(props) {
    const [form] = Form.useForm();
    const { dispatch, data } = props
    const subForm = () => {
        data.submit(form.getFieldsValue());
        // console.log(form.getFieldsValue())
    }
    const formItems = () => {
        const inputs = (type) => {
            switch (type) {
                case 'input':
                    return (<Input />)
                    break;
                case 'password':
                    return (<Input.Password placeholder="input password" />)
                    break;
                default:
                    return (<Input />)
            }
        }
        return data.list.map(item => {
            let Item: FormItem = item;
            return (
                <Form.Item
                    label={Item.label}
                    name={Item.name}
                    rules={Item.rules}
                >
                    {inputs(Item.type)}
                </Form.Item>
            )
        })
    }
    useEffect(() => {
        // console.log(props)
    })
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            {formItems()}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={subForm} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default FormComp
