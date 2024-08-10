import React from "react";
import Authdata from "./Authdata";
import axios from "axios";




class Authform extends React.Component{


    constructor(props) {
        super(props);


        this.state = {
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






      async handleSubmit(event) {
        event.preventDefault();
        if(this.props.isRegister)
        {
            //          Registeration Logic

            if(this.state.confirmpassword !== this.state.authdata.password)
                {
                    this.setState({error:true});
                }
            else{

                this.setState({error:false});
                try
                {
                const response = await axios.post("http://localhost:8080/register",{
                                                                                              email:this.state.authdata.email,
                                                                                              password: this.state.authdata.password,
                                                                                              fname: this.state.firstname,
                                                                                              lname: this.state.lastname
                                                                                                      });
                this.props.setIsRegister(false);


                }
                catch{
                       console.log('Exception....');


                }











            }

        }
        else{


            const response = await axios.post("http://localhost:8080/JWTauthenticate",this.state.authdata);
            document.cookie = `jwt=${response.data["jwt"]}; path=/;`

        }



      }

    render()
    {

        console.log('isregister in authform is :', this.props.isRegister);
        return(


            <div>

            <form onSubmit={this.handleSubmit}>


            {this.props.isRegister &&
              <><label>
                        First Name:
                        </label><br />

                            <input type="text" value={this.state.firstname} onChange={this.handleFnameChange} required />
                            <br />
                </>

                }
                          {this.props.isRegister &&
              <><label>
                            Last Name:</label><br />
                            <input type="text" value={this.state.lastname} onChange={this.handleLnameChange} required />
                            <br />

                </>

                }


              <label>
                Email:
                </label>
                <br />
                <input type="email" value={this.state.authdata.email} onChange={this.handleEmailChange} required />
                <br />

              <label>
                Password:  </label>
                <br />
                <input type="password" value={this.state.authdata.password} onChange={this.handlePasswordChange} required />
                <br />


              {this.props.isRegister &&
              <><label>
                            Confirm password: </label>
                            <br/>
                            <input type="password" value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange} required />

                            {this.state.error && <p style={{ color: 'red' }} >  Passwords do not match !</p> }


                </>

                }
             <br/>
             {this.props.isRegister &&<>              <button  class='card-button' type="submit">Sign Up</button>
              </>
    }             {
      !this.props.isRegister &&<>              <button class='card-button' type="submit">Login</button>
      </>
}


            </form>
          </div>
        )










    }







}

export default Authform;