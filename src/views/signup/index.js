import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory, Link } from 'react-router-dom';

import './style.css';

import { handleSignup } from '../utils';

const Signup = () => {
  const history = useHistory();

  const onFinish = (data) => handleSignup(data, history);

  return (
    <div className="signup__wrapper">
      <div>
        <Link to="/dashboard" className="signup_logo_wrapper">
          <img width="60%" src="/images/logo.png" />
        </Link>
      </div><br />
      <Form className="signup__form" name="signup" onFinish={onFinish}>
        <Form.Item
          name="username"
          validatetrigger="onSubmit"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
            {
              max: 12,
              min: 3,
            },
          ]}
        >
          <Input size="large" placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name="email"
          validatetrigger="onSubmit"
          rules={[
            {
              required: true,
              max: 50,
              message: 'Please input your email',
            },
            {
              type: 'email',
              message: 'Please input valid email',
            },
          ]}
        >
          <Input size="large" placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="password"
          validatetrigger="onSubmit"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
            {
              max: 20,
              min: 4,
            },
          ]}
        >
          <Input.Password size="large" placeholder="Type your password" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            className="signup__btn"
            type="primary"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="signup__btns-wrapper ">
        <Button
          size="large"
          className="signup__login-btn"
          onClick={() => history.push('/login')}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Signup;
