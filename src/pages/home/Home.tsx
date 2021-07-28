import { Form, Input, Checkbox, Button } from 'antd'
import React from 'react'
import './home.css'

function Home() {
    return (
        <Form
            labelAlign="left"
            style={{ width: 200 }}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input autoComplete="off" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Home
