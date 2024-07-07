import React from "react";
import Authform from "./Authform";
class Login extends React.Component {


  render() {
    return (
      <Authform isregister={false}/>
    );
  }
}




export default Login;