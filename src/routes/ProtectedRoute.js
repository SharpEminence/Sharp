import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute ({
  component:Component,
  isAuthenticated:isAuthenticated,
  logout:Logout,
  ...rest
}){ return(
<Route
    {...rest}
    render={(props) =>{
      if(isAuthenticated){
        return <Component logout ={props.logout}/>
      }else{
        return (<Redirect to = '/login' />)
      }
    }}
    
      
    
  />
)
  
  }


export default ProtectedRoute;