import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory, Link } from 'react-router-dom';

import './style.css';

import { actions } from '../../stores';
const auth = actions.auth;

const Login = () => {
  const history = useHistory();
  const onFinish = (data) => {auth.onLoginUser(data, history)};

  return (
    <div className="login__wrapper">
      <div>
        <Link to="/dashboard" className="login_logo_wrapper">
          <img width="60%" src="/images/logo.png" />
        </Link>
      </div><br />
      <Form className="login__form" name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          validateTrigger="onSubmit"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input valid email',
            },
          ]}
        >
          <Input size="large" placeholder="Type your email" />
        </Form.Item>

        <Form.Item
          name="password"
          validateTrigger="onSubmit"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
            {
              min: 4,
            },
          ]}
        >
          <Input.Password size="large" placeholder="Type your password" />
        </Form.Item>

        <Form.Item>
          <Button
            className="login__btn"
            size="large"
            type="primary"
            htmlType="submit"
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
      <div className="login__btns-wrapper">
        <Button
          size="large"
          className="login__signup-btn"
          onClick={() => history.push('/signup')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
