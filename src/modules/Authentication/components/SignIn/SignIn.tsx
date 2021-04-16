import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Divider, Tooltip } from 'antd';
import { Toaster } from 'react-hot-toast';
import {
  UserOutlined,
  GoogleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Style from './StyledSignIn';
import { useTranslation } from 'react-i18next';
import { userEmail, userPassword } from './constants';
import { Color } from '@core/constants/colors';
import { ActionTypes } from '@store/actions/constans.d';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeHandler = useCallback(
    (event: any) => {
      const { name, value } = event.currentTarget;

      if (name === userEmail) {
        setEmail(value);
      } else if (name === userPassword) {
        setPassword(value);
      }
    },
    [email, password],
  );

  const logginGoogle = useCallback(() => {
    dispatch({
      type: ActionTypes.ASYNC_SIGN_IN_GOOGLE,
    });
  }, []);

  const user = { email, password };
  const logginEmailAndPassword = useCallback(() => {
    dispatch({
      type: ActionTypes.ASYNC_SIGN_IN,
      user,
    });
  }, [user]);

  return (
    <>
      <Style.Container>
        <Toaster />
        <Style.Form>
          <Form>
            <Style.Title>{t('signIn.title')}</Style.Title>
            <Divider />
            <p>
              {t('signIn.mainText1')}
              <br />
              {t('signIn.mainText2')}
            </p>
            <Divider />
            <Form.Item>
              <Input
                type={t('signIn.input.email.type')}
                name={t('signIn.input.email.name')}
                placeholder={t('signIn.input.email.placeholder')}
                id={t('signIn.input.email.id')}
                value={email}
                onChange={onChangeHandler}
                prefix={<UserOutlined />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: Color.iconBlack }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                type={t('signIn.input.password.type')}
                name={t('signIn.input.password.name')}
                placeholder={t('signIn.input.password.placeholder')}
                id={t('signIn.input.password.id')}
                value={password}
                onChange={onChangeHandler}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: Color.iconBlack }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item>
              <Style.Button>
                <button className="SignIn" onClick={logginEmailAndPassword}>
                  {t('signIn.buttonLogin')}
                </button>
              </Style.Button>
              <Style.Links>
                <Link to="/signUp">
                  <span className="SignUp">{t('signIn.buttonSignUp')} </span>
                </Link>{' '}
                <br />
                <Link to="/passwordReset">
                  <span>{t('signIn.buttonForgetPassword')}</span>
                </Link>
              </Style.Links>
            </Form.Item>
            <Divider plain>{t('signIn.textBeforeGoogle')}</Divider>
            <Form.Item>
              <Style.Button>
                <button className="Google" onClick={logginGoogle}>
                  <GoogleOutlined />
                  <span>{t('signIn.textGoogle')}</span>
                </button>
              </Style.Button>
            </Form.Item>
          </Form>
        </Style.Form>
      </Style.Container>
    </>
  );
};

export default SignIn;
