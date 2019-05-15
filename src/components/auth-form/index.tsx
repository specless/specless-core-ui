import React, { FormEvent, useEffect, useState } from 'react';

import { ICredential } from '../../models/credential';
import CoreLogin from '../login';
import PasswordResetEmail from '../password-reset-email';
import PasswordResetPassword from '../password-reset-password';

interface IAuthFormProps {
  onGoogleLogin: () => void;
  onPasswordLogin: (credentials: ICredential) => void;
  onPasswordResetEmail: () => void;
  onPasswordResetPassword: (values: { password: string; passwordResetToken: string }) => boolean;
  passwordResetToken?: string;
  defaultShowPasswordEmail?: true;
}

const AuthForm: React.FunctionComponent<IAuthFormProps> = (props) => {
  const {
    onGoogleLogin,
    onPasswordLogin,
    onPasswordResetEmail,
    onPasswordResetPassword,
    passwordResetToken,
    defaultShowPasswordEmail
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
    />
  );

  const passwordResetEmailForm = (
    <PasswordResetEmail
      onPasswordResetEmail={onPasswordResetEmail}
      toggleShowResetPasswordEmail={toggleShowResetPasswordEmail}
    />
  );

  const passwordResetPasswordForm = (
    <PasswordResetPassword
      passwordResetToken={passwordResetToken}
      onPasswordResetPassword={onPasswordResetPassword}
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
