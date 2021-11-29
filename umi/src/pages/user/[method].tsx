import { useState, useEffect } from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import request from '@/utils/request';
import cookie from 'react-cookies';

export default function IndexPage(props) {
    const [method, setMethod] = useState('login');
    const { match } = props
    const [form] = Form.useForm();
    const submit = () => {
        let params = form.getFieldsValue();
        request('/user/' + method, {
            method: 'POST',
            data: params,
        }).then((res) => {
            if (method == 'login') {
                // console.log(request.extendOptions)
                request.extendOptions({ headers: { 'Authorization': res.token } });
                // cookie.save('user', res);
                request.get('/index/testSql', {}).then(res => {
                    console.log(res)
                })
            }
        })
    }
    const login = () => {
        console.log('login')
    }
    const items = (type) => {
        switch (type) {
            case 'repwd':
                return (
                    <>
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="原密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="新密码"
                            name="repwd"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                修改密码
                            </Button>
                        </Form.Item>
                    </>
                )
                break;
            case 'register':
                return (
                    <>
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
                        <Form.Item
                            label="确认密码"
                            name="repwd"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                    </>
                )
                break;
            default:
                return (
                    <>
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
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </>
                )
        }
    }
    useEffect(() => {
        console.log(props)
        if (match.params.method) setMethod(match.params.method)
    })
    return (
        <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={submit}
        >
            {items(method)}
        </Form>
    )
}