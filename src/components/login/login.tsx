import React from 'react';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = () => {
  return (
    <div className='login-container'>
      <img className='login-logo white-filter' src='/assets/specless-icon.png'/>
      <div id='auth0-container'/>
      <div className='abstract-ads'/>
    </div>
  );
};

export default Login;
