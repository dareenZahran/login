import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import SignInPage from './login';
function App() {
  return (
    <GoogleOAuthProvider clientId="582323076313-97a0tp4ig3c3k7undecpe91p1rdmagj5.apps.googleusercontent.com">
    <div className="App">
  <SignInPage/>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
