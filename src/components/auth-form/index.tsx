import React, { FormEvent, useEffect, useState } from 'react';

import { ICredential } from '../../models/credential';
import CoreLogin from '../login';
import PasswordResetEmail, { IPasswordResetEmailCallbackValues } from '../password-reset-email';
import PasswordResetPassword, { IPasswordResetPasswordCallbackValues } from '../password-reset-password';

interface IAuthFormProps {
  onGoogleLogin: () => void;
  onPasswordLogin: (credentials: ICredential) => void;
  onPasswordResetEmail: (values: IPasswordResetEmailCallbackValues) => void;
  onPasswordResetPassword: (values: IPasswordResetPasswordCallbackValues) => void;
  passwordResetToken?: string;
  defaultShowPasswordEmail?: true;
  loginFailed?: boolean;
  passwordResetEmailFailed?: boolean;
  passwordResetPasswordFailed?: boolean;
}

const AuthForm: React.FunctionComponent<IAuthFormProps> = (props) => {
  const {
    onGoogleLogin,
    onPasswordLogin,
    onPasswordResetEmail,
    onPasswordResetPassword,
    passwordResetToken,
    defaultShowPasswordEmail,
    loginFailed,
    passwordResetEmailFailed,
    passwordResetPasswordFailed,
  } = props;

  const [showResetPasswordEmail, setShowResetPasswordEmail] = useState<boolean>(defaultShowPasswordEmail || false);

  const toggleShowResetPasswordEmail = () => {
    setShowResetPasswordEmail(!showResetPasswordEmail);
  };

  const loginForm = (
    <CoreLogin
      onGoogleLogin = { onGoogleLogin }
      onPasswordLogin = { onPasswordLogin }
      toggleShowResetPasswordEmail = { toggleShowResetPasswordEmail }
      loginFailed={loginFailed}
    />
  );

  const passwordResetEmailForm = (
    <PasswordResetEmail
      onPasswordResetEmail={onPasswordResetEmail}
      toggleShowResetPasswordEmail={toggleShowResetPasswordEmail}
      passwordResetEmailFailed={passwordResetEmailFailed}
    />
  );

  const passwordResetPasswordForm = (
    <PasswordResetPassword
      passwordResetToken={passwordResetToken}
      onPasswordResetPassword={onPasswordResetPassword}
      passwordResetPasswordFailed={passwordResetPasswordFailed}
    />
  );

  const renderForm = () => {
    if (passwordResetToken) {
      return passwordResetPasswordForm;
    }

    if (showResetPasswordEmail) {
      return passwordResetEmailForm;
    }

    return loginForm;
  }

  return (
    <div>
      {renderForm()}
    </div>
  );
}
  ;

AuthForm.displayName = 'AuthForm';

export default AuthForm;
