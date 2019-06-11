import React, { Component } from 'react';


class SAT extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 1,
         str: "hii"
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber = (dat)  => {
      this.setState({data: dat + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {() => this.setNewNumber(this.state.data)}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!',newProps)
   }
   shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate',newProps, newState);
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!',nextProps, nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!',prevProps, prevState)
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
    console.log('RENDER')
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
    }
}
export default SAT;