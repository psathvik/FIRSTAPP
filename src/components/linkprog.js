import React, { Component } from 'react';
import { BrowserRouter,Route } from "react-router-dom";
//import Login from "./loggin";
import home from "./home";
import Navagation from "./navagation";
import Login from "../loginform" 


class Frame extends Component {
    render() {
       console.log("IN ROUTERS")
       return (
          <div>
             
            

         
          <BrowserRouter> 
             <Navagation/> 
          
             <Route path='/' component={home} exact />   
             <Route path='/login' component={Login}/> 


           </BrowserRouter>


           </div>
         
          );
        }
    }  
    export default Frame;