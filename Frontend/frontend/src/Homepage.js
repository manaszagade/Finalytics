import React from "react";
import Signup from "./registeration/Signup";
import Login from "./registeration/Login";
import Header from "./Header";
import Footer from "./Footer";

function Homepage(props){


    var isregister = props.isregister;

    
    
    if(isregister)
        {
           return( 
           <>
           
           <Header />
           
           <Signup />
           
           <Footer/>
           </>)
           ;
        }
    else{
       return ( <Login />);
    }





}
export default Homepage;