import React from "react";
import Login from "./registeration/Login";
import Header from "./Header";
import Footer from "./Footer";
import { Divider, Typography } from "@mui/material";
import './Homepage.css';
import Signup from './registeration/Signup'
import { useState } from "react";

function Homepage(props) {
    const [isRegister, setIsRegister] = useState(props.isRegister);

    function handleCreate() {
        console.log('create account clicked')
        setIsRegister(true);
    }
    function handleLogin(){
        setIsRegister(false);

    }
    
        return( 
            <div className="homepage">

                <Header />
                
                <div className="wrap">
                
                
                    <div className="fleft">


                    <div class="card">
                        <div class="card-content">
                        {isRegister ? <Signup /> : <Login />}
                          
                            

                            <Divider><Typography>or</Typography></Divider>
                            <br></br>
                            {isRegister? <button class="card-button" onClick={handleLogin}>Login</button>:<button class="card-button" onClick={handleCreate}>Create Account</button>}
                            
                            <br/>
                            <br/>
                        </div>
                    </div>
                    </div>

                    <Divider orientation="vertical" flexItem className="vertical-divider" />
                    
                    <div className="fright">
                        <div className="rmessgae">

<h1>Welcome to Finalytics!</h1>

Join the leading platform for financial analytics and insights. <br>
</br>Whether you’re a seasoned investor, a finance professional, or someone looking to better understand their financial situation, Finalytics provides the tools and information you need to make informed decisions.


                        </div>
                        
                        </div>
                
                
                </div>
                
                <Footer />
            </div>
        );

}

export default Homepage;