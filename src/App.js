import React from 'react';
import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onFailed() {
    console.log('Twitter login failed.');
  }

  
  onSuccess() {
    console.log('Twitter login failed.');
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }

    const responseFacebook = (response) => {
      console.log(response);
    }
   

    return(
      <div>
        <Header /> 
        {/* <GoogleLogin
          redirectUri="http://localhost:3000"
          clientId="401685601588-6c3a34thb8783n9v7701etv06td738qe.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <p></p>
        <FacebookLogin
          appId="305243490383366"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <p></p>
        <TwitterLogin
          loginUrl="http://localhost:3000/index.html"
          onFailure={this.onFailed}
          onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:3000/index.html"
        /> */}
       </div>
    );
  }

}

export default App;
