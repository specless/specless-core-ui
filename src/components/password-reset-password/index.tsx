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
import Text from '../text';

interface IPasswordValidations {
  uppercase: boolean;
  lowercase: boolean;
  digit: boolean;
  length: boolean;
}

interface IPasswordResetPasswordProps extends FormComponentProps {
  onPasswordResetPassword: (values: { password: string; passwordResetToken: string }) => boolean;
  passwordResetToken: string;
}

const PasswordResetPassword: React.FunctionComponent<IPasswordResetPasswordProps> = (props) => {
  const {
    onPasswordResetPassword,
    passwordResetToken,
    form,
    form: {
      getFieldsError,
      validateFields,
      getFieldDecorator,
    },
  } = props;
  const _formHelpers = getFormHelpers(form);

  const defaultPasswordValidations = {
    uppercase: false,
    lowercase: false,
    digit: false,
    length: false,
  };

  const [_isLoading, _setIsLoading] = useState<boolean>(false);
  const [_isSuccessful, _setIsSuccessful] = useState<boolean>(true);
  const [_passwordValidations, _setPasswordValidations] = useState<IPasswordValidations>(defaultPasswordValidations);
  const isValidPassword = _.values(_passwordValidations).every((valid) => valid);

  useEffect(() => {
    validateFields();
  }, []);

  const _handleSubmit = async (e: FormEvent) => {
    _setIsLoading(true);
    const successful = await _formHelpers.handleSubmit(e, onPasswordResetPassword);

    if (!successful) {
      _setIsSuccessful(false);
    }

    _setIsLoading(false);
  };

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    const hasUppercaseRegex = new RegExp('(?=.*[A-Z])');
    const hasUppercase = hasUppercaseRegex.test(password);

    const hasLowercaseRegex = new RegExp('(?=.*[a-z])');
    const hasLowercase = hasLowercaseRegex.test(password);

    const hasDigitRegex = new RegExp('(?=.*[0-9])');
    const hasDigit = hasDigitRegex.test(password);

    const hasLength = password.length >= 8;

    const passwordValidations = {
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      digit: hasDigit,
      length: hasLength,
    };

    _setPasswordValidations(passwordValidations);
  };

  const _title = _isSuccessful ? 'Update Your Password' : 'Something went wrong. Please contact us at support@gospecless.com';

  const fields: IFormField[] = [
    {
      id: 'password',
      component: <Input
        prefix={<Icon type='lock' />}
        placeholder='Password'
        type='password'
        onChange={validatePassword}
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
    {
      id: 'passwordResetToken',
      component: <Input
        type='text'
        disabled={true}
      />,
      config: {
        initialValue: passwordResetToken,
        rules: [
          {
            required: true,
          },
        ],
      },
      formItemProps: {
        style: {
          display: 'none',
        },
      },
    },
  ];

  const renderPasswordValidations = () => {
    const getIcon = (valid: boolean) => valid
      ? <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      : <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
      ;
    return (
      <div>
        <Text>{getIcon(_passwordValidations.uppercase)} One Uppercase Character</Text>
        <Text>{getIcon(_passwordValidations.lowercase)} One Lowercase Character</Text>
        <Text>{getIcon(_passwordValidations.digit)} One Digit</Text>
        <Text>{getIcon(_passwordValidations.length)} At Least 8 Characters</Text>
      </div>
    );
  };

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
        {renderPasswordValidations()}
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={_formHelpers.formHasErrors(getFieldsError()) || _isLoading || !isValidPassword || !_isSuccessful}
          >
            Update Password
            </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
  ;

PasswordResetPassword.displayName = 'PasswordResetPassword';
const WrappedComponent = Form.create<IPasswordResetPasswordProps>({ name: 'PasswordResetPassword' })(PasswordResetPassword);

export default WrappedComponent;
