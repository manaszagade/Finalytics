import React from 'react';
import Authform from './Authform'; 

class Signup extends React.Component {

  render() {
    return (
      <div>
 
       <Authform isregister= {true}/>
      </div>
    );
  }
}

export default Signup;