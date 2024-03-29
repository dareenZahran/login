import React from 'react';
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';

export default function SignInPage() {
  const handleLoginError = () => {
    console.error('Login Error');
  };

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}
