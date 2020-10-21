import React from "react"

import { Form, Input, Button, Checkbox } from 'antd';
const {TextArea} = Input

const AppContact = () => {
    return (
        <div id="contact"  className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Send Us a Message</h2>
                    <p>We would love to hear from you!</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input  placeholder="Please enter your full name!" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                        type="email"
                        placeholder="Please enter the correct email of yours!"
                        />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                    >
                        <Input
                        placeholder="Please enter your phone number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                    >
                        <Input
                        placeholder="Subject"
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextArea rows={4} placeholder="Message" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                       Send
                        </Button>
                    </Form.Item>
             </Form>
            </div>
        </div>
    )
}

export default AppContact