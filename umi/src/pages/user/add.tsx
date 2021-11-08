import { Form, Input, Button, Checkbox, Select } from 'antd';
import { register } from '@/services/user';
import { request } from 'umi';

const { Option } = Select;
export default function Add() {
    const onFinish = (values: any) => {
        //console.log('Success:', values);
        // request('/user/login', {
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     method: 'post',
        //     data: {name: 'cc'},
        //     skipErrorHandler: true,
        //   })
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
        register(values).then((res)=>{
            return res.json()
        }).then(data=>{
            console.log(data)
        })
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ type: "1", remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
            <Form.Item 
            label="类型"
            name="type" >
            <Select>
                <Option value="0">管理员</Option>
                <Option value="1">销售</Option>
                <Option value="2">客户</Option>
            </Select>
            </Form.Item>
            <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 7 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
    );
}
