import { FormComponentProps } from 'antd/lib/form';
import _ from 'lodash/fp';
import React, { FormEvent, useEffect, useState } from 'react';

import { IFormField } from '../../models/form-field';
import { getFormHelpers } from '../../utils/antd-form-helpers';
import Button from '../button';
import Card from '../card';
import Form from '../form';
import Icon from '../icon';
import Input from '../input';

interface IPasswordResetEmailProps extends FormComponentProps {
  onPasswordResetEmail: () => void;
  toggleShowResetPasswordEmail: () => void;
}

const PasswordResetEmail: React.FunctionComponent<IPasswordResetEmailProps> = (props) => {
  const {
    onPasswordResetEmail,
    toggleShowResetPasswordEmail,
    form,
    form: {
      getFieldsError,
      validateFields,
      getFieldDecorator,
    },
  } = props;

  const [_isLoading, _setIsLoading] = useState<boolean>(false);
  const [_isValidPassword, _setIsValidPassword] = useState<boolean>(false);

  useEffect(() => {
    validateFields();
  }, []);

  const fields: IFormField[] = [
    {
      id: 'email',
      component: <Input
        prefix={<Icon type='user' />}
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
    },
  ];

  const _handleSubmit = async (e: FormEvent) => {
    _setIsLoading(true);
    await _formHelpers.handleSubmit(e, onPasswordResetEmail);
    _setIsLoading(false);
  };

  const _formHelpers = getFormHelpers(form);
  return (
    <Card
      title='Reset Your Password'
    >
      <Form
        className='form-button-container'
        layout='vertical'
        onSubmit={_handleSubmit}
      >
        {_.map(_formHelpers.renderFields, fields)}
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={_formHelpers.formHasErrors(getFieldsError()) || _isLoading}
          >
            Reset Password
            </Button>
        </Form.Item>
      </Form>
      <Button onClick={toggleShowResetPasswordEmail}>Back</Button>
    </Card>
  );
}
  ;

PasswordResetEmail.displayName = 'PasswordResetEmail';
const WrappedComponent = Form.create<IPasswordResetEmailProps>({ name: 'PasswordResetEmail' })(PasswordResetEmail);

export default WrappedComponent;
