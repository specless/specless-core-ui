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

export interface IPasswordResetEmailCallbackValues {
  email: string;
}

interface IPasswordResetEmailProps extends FormComponentProps {
  onPasswordResetEmail: (values: IPasswordResetEmailCallbackValues) => void;
  toggleShowResetPasswordEmail: () => void;
  passwordResetEmailFailed?: boolean;
}

const PasswordResetEmail: React.FunctionComponent<IPasswordResetEmailProps> = (props) => {
  const {
    onPasswordResetEmail,
    toggleShowResetPasswordEmail,
    passwordResetEmailFailed,
    form,
    form: {
      getFieldsError,
      validateFields,
    },
  } = props;
  const _formHelpers = getFormHelpers(form);

  const [_isLoading, _setIsLoading] = useState<boolean>(false);

  const _handleSubmit = async (e: FormEvent) => {
    _setIsLoading(true);
    await _formHelpers.handleSubmit(e, onPasswordResetEmail);
    _setIsLoading(false);
  };

  useEffect(() => {
    validateFields();
  }, []);

  const _title = passwordResetEmailFailed
    ? 'Something went wrong. Please contact us at support@gospecless.com'
    : 'Reset Your Password'
    ;

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

  return (
    <Card
      title={_title}
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
            disabled={_formHelpers.formHasErrors(getFieldsError()) || _isLoading || passwordResetEmailFailed}
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
