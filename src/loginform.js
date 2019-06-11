import React, { Component } from 'react'
import './nani2.css';
import sat from './imgLogin.jpg'

class Frame extends Component {
    render() {
       return (
         <div>
          
        <center>  <table style={{width:"300px",  textAlign:"center" ,borderStyle: "dotted dashed solid double"}}>

	
             <tr>
                    <td rowspan="3">
                    <img src={sat} width="100px" height="120px"/>
                     </td>
                     <td >
                          Username
                     </td>
                     <td><input type="text" name="name" value=" "/></td>
             </tr>
             <tr style={{backgroundColor:"#77ffcb" }}>
                     <td> password </td>
                     <td><input type="password" name="email"  placeholder="enter name"/></td>
             </tr>

             <tr style={{backgroundColor:"#77ffcb", align:"center"}}>
                     <td colspan="2">
                        <input type="submit" value="Submit"/>
                         <button>clear</button>
                      </td>
             </tr>

          </table></center><br></br>
          

           
         
        </div>
        )
    }
}
            
export default Frame
   