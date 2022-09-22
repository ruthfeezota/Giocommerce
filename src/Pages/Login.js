import React from 'react';
import GoogleLogin from 'react-google-login';
import '../App.css';
import googleData from 'react-google-login';



function Login() {
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (gooleData) => {
    console.log(googleData)
  }
  return (
    <>
    <h1>React Google Login App</h1>
    <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
    cookiePolicy={'single_host_orgin'}
    >
    </GoogleLogin>

      
    </>
  );
}

export default Login;
