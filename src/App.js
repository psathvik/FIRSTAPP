// import './App.css';
//import FormReg from './regForm.js'
//import SAT from './sathvik';
import React, { Component } from 'react'
//import Frame from './components/linkprog'
import Login from "./antd loginform"
class App extends Component {
 // constructor(props){
    //super(props);
   // this.state = {
    //  str:"name"
    
   // }
  //}


  //componentWillMount(){
  //  this.setState({str:"sathvik"})
  

  render() {

    return (
      <div >
      <header className="App-header">

           <Login/> 
           {/*<Frame/>}

           {/* <SAT/> */}
           
            {/* <FormReg  strProp = {this.state.str}/> */}
            
      </header>
    </div>
    )
    } 
}


export default App
