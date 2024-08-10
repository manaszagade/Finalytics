import React from "react";
import Authform from "./Authform";


class Login extends React.Component {


  render() {
    console.log('Rendering Login component with isRegister:', this.props.isRegister);

    return (
      <Authform isRegister={this.props.isRegister}/>
    );
  }
}




export default Login;