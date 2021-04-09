/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Input, Divider, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Style from './StyledSignUp';
import { useDispatch } from 'react-redux';
import { signUpEmail, signInGoogle } from '@store/toolkit/authSlice';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeHandlerEmail = event => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    }
  };

  const onChangeHandlerPassword = event => {
    const { name, value } = event.currentTarget;
    if (name === 'userPassword') {
      setPassword(value);
    }
  };

  const onChangeHandlerName = event => {
    const { name, value } = event.currentTarget;
    if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  const createUser = async event => {
    // dispatch(allActions.authActions.signup(email, password));
    event.preventDefault();
    dispatch(signUpEmail(email, password));
    history.push('/home');
  };

  const logginGoogle = () => {
    dispatch(signInGoogle());
  };

  return (
    <Style.Container>
      <Toaster />
      <Style.Form>
        <Form>
          <Style.Title>Sign Up</Style.Title>
          <Form.Item>
            <Input
              type="text"
              name="displayName"
              value={displayName}
              placeholder="E.g: Faruq"
              id="displayName"
              onChange={onChangeHandlerName}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="email"
              name="userEmail"
              value={email}
              placeholder="E.g: faruq123@gmail.com"
              id="userEmail"
              onChange={onChangeHandlerEmail}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              type="password"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={onChangeHandlerPassword}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item>
            <Style.Button>
              <button className="SignUp" onClick={createUser}>
                Sign up
              </button>
            </Style.Button>
            <Style.Links>
              <p> Already have an account?</p>
              <Link to="/signIn">Sign in</Link>
            </Style.Links>
          </Form.Item>
          <Divider plain>Or SignUp Using</Divider>
          <Form.Item>
            <Style.Button onClick={logginGoogle}>
              <button onClick={logginGoogle}>Sign In with Google</button>
            </Style.Button>
          </Form.Item>
        </Form>
      </Style.Form>
    </Style.Container>
  );
};

export default SignUp;
