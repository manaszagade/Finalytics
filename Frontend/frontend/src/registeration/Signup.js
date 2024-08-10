import React from 'react';
import Authform from './Authform'; 

class Signup extends React.Component {

  render() {
      console.log('Rendering Signup component with isRegister:', this.props.isRegister);

    return (

      <div>
 
       <Authform isRegister={this.props.isRegister} setIsRegister={this.props.setIsRegister} />
      </div>
    );
  }
}

export default Signup;