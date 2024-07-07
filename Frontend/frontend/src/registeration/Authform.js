import React from "react";
import Authdata from "./Authdata";

class Authform extends React.Component{

   
    constructor(props) {
        super(props);
        this.state = {
            
            isregister:this.props.isregister,
            confirmpassword:'',
            authdata : new Authdata('',''),
            error:false,
            firstname:'',
            lastname:''
        
        };
        this.handleFnameChange = this.handleFnameChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleEmailChange(event) {
        const authdata=this.state.authdata;
        authdata.email=event.target.value;

        this.setState({ authdata:authdata });
      }
    
      handlePasswordChange(event) {
        const authdata=this.state.authdata;
        authdata.password=event.target.value;

        this.setState({ authdata:authdata });
    
    };

    handleFnameChange(event) {

        this.setState({ firstname:event.target.value });
    
    };
    handleLnameChange(event) {
        this.setState({ lastname:event.target.value });
    
    };


      handleConfirmPasswordChange(event)
      {
        this.setState({ confirmpassword:event.target.value });
    }
        


 
    


      handleSubmit(event) {
        event.preventDefault();
        if(this.state.isregister)
        {
            //          Registeration Logic 

            if(this.state.confirmpassword !== this.state.authdata.password)
                {
                    this.setState({error:true});
                }
            else{
                this.setState({error:false});
            }
    
        }
        else{
            //          Login Logic
        }
        
        

      }

    render()
    {
        return(


            <div>
 
            <form onSubmit={this.handleSubmit}>


            {this.state.isregister &&
              <><label>
                            First Name:
                            <input type="text" value={this.state.firstname} onChange={this.handleFnameChange} required />
                        </label><br />
                      
                </>
                
                }
                          {this.state.isregister &&
              <><label>
                            Last Name:
                            <input type="text" value={this.state.lastname} onChange={this.handleLnameChange} required />
                        </label><br />
                  
                </>
                
                }

    
              <label>
                Email:
                <input type="email" value={this.state.authdata.email} onChange={this.handleEmailChange} required />
              </label>
              <br />
             
              <label>
                Password:
                <input type="password" value={this.state.authdata.password} onChange={this.handlePasswordChange} required />
              </label>
              <br />


              {this.state.isregister &&
              <><label>
                            Confirm password:
                            <input type="password" value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange} required />

                            {this.state.error && <p style={{ color: 'red' }} >  Passwords do not match !</p> }      

                        </label>
                </>
                
                }
             <br/>
             
              <button type="submit">Sign Up</button>
            
            
            </form>
          </div>
        )


            






        
    }







}

export default Authform;