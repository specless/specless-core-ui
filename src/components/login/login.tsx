import React, { FormEvent, useEffect, useState } from 'react';
import _ from 'lodash/fp';

import Button from '../button';
import Card from '../card';
import Form from '../form';
import Input from '../input';

import { IFormField } from '../../models/form-field';
import { getFormHelpers } from '../../utils/antd-form-helpers';
import { FormComponentProps } from 'antd/es/form';
import { ICredential } from '../../models/credential';
import Icon from '../icon';

interface ILoginProps {
  onGoogleLogin: () => void;
  onPasswordLogin: (credentials: ICredential) => void;
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const {
      onGoogleLogin,
      onPasswordLogin,
      form,
      form: {
        getFieldsError,
        validateFields,
      },
    } = props as ILoginProps & FormComponentProps;

    const [_isLoading, _setIsLoading] = useState<boolean>(false);
    useEffect(() => {
      validateFields();
    }, []);
    const _fields: IFormField[] = [
      {
        id: 'email',
        component: <Input
          prefix={<Icon type='user'/>}
          placeholder='Email'
          type='string'
        />,
        config: {
          initialValue: '',
          rules: [
            {
              required: true,
              message: 'Please enter your email address!',
            },
          ],
        },
      }, {
        id: 'password',
        component: <Input
          prefix={<Icon type='lock'/>}
          placeholder='Password'
          type='password'
        />,
        config: {
          initialValue: '',
          rules: [
            {
              required: true,
              message: 'Please enter your password!',
            },
          ],
        },
      },
    ];

    const _handleSubmit = async (e: FormEvent) => {
      _setIsLoading(true);
      await _formHelpers.handleSubmit(e, onPasswordLogin);
      _setIsLoading(false);
    };

    const _formHelpers = getFormHelpers(form);
    return (
      <Card
        title='Welcome to Specless'
      >
        <Form
          className='form-button-container'
          layout='vertical'
          onSubmit={_handleSubmit}
        >
          <Form.Item>
            <Button
              block
              disabled={_isLoading}
              type='primary'
              onClick={onGoogleLogin}
              htmlType='button'
            >
              Google Login
            </Button>
          </Form.Item>
          {_.map(_formHelpers.renderFields, _fields)}
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              disabled={_formHelpers.formHasErrors(getFieldsError()) || _isLoading}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
;

Login.displayName = 'Login';
const WrappedComponent = Form.create({ name: 'login' })(Login as React.FunctionComponent<ILoginProps & FormComponentProps>);

export default WrappedComponent;
