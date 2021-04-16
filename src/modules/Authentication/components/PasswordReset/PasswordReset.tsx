import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Toaster } from 'react-hot-toast';
import Style from './StyledPasswordReset';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userEmail } from './constants';
import { ActionTypes } from '@store/actions/constans.d';

const PasswordReset = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChangeHandler = useCallback((event: any) => {
    const { name, value } = event.currentTarget;

    if (name === userEmail) {
      setEmail(value);
    }
  }, []);

  const user = { email };
  const sendResetEmail = useCallback(() => {
    dispatch({
      type: ActionTypes.ASYNC_RESET_PASSWORD,
      user,
    });
    setEmail('');
  }, [user]);

  return (
    <Style.Container>
      <Toaster />
      <Style.Form>
        <Form>
          <Style.Title>{t('resetPassword.title')}</Style.Title>
          <Form.Item>
            <Input
              type={t('resetPassword.input.type')}
              name={t('resetPassword.input.name')}
              id={t('resetPassword.input.id')}
              placeholder={t('resetPassword.input.placeholder')}
              value={email}
              onChange={onChangeHandler}
            />
          </Form.Item>
          <Form.Item>
            <Style.Button>
              <button className="ResetPas" onClick={sendResetEmail}>
                {t('resetPassword.buttonResetPassword')}
              </button>
            </Style.Button>
          </Form.Item>
          <Link to="/signIn">&larr; {t('resetPassword.buttonBackSignIn')}</Link>
        </Form>
      </Style.Form>
    </Style.Container>
  );
};

export default PasswordReset;
