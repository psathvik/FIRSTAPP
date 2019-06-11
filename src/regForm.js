import React, { Component } from 'react'
import Frame from './nani.js'
import './test.css';


class Test extends Component {

    render() {
        return (
            <div>
                    
               <center> <table style={{width:"60%"}} >
                        <tr>
                            <td > {this.props.strProp} </td>
                            <td><input type="text" name="name" value="sathvik"/></td>
                        </tr>
                        <tr>
                            <td><Frame/>  </td>
                            
                            <td><input type="text" name="email" placeholder="enter name"/></td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td><input type="number" name="mobile" value="9542104624"/></td>
                        </tr>
                        <tr>
                            <td>gender</td>
                            <td><input type="radio" name="gender" value="male" checked /> Male
                            <input type="radio" name="gender" value="female" /> Female
                            <input type="radio" name="gender" value="other" /> Other</td>
                            </tr>

                        <tr>

                            <td><input type="checkbox" name="course" value="pg" />pg<br />
                                <input type="checkbox" name="course" value="b tech" />b tech  <br/>
                                <input type="checkbox" name="course" value="b tech" />b tech
                            </td>
                        </tr>

                        <tr>
                            <td>course</td>
                            <td><textarea rows="5" cols="10" name="description" >
                                                    Enter details here...
                            </textarea>
                            </td>
                        </tr>
                        <tr  align="center">
                            <td colspan="2">
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                             
                             <tr><td>{this.props.strProp}</td></tr>
            </table></center>

        </div>
        )
    }
}
   
export default Test
