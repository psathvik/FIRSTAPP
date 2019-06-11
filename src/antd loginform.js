import React, { Component } from 'react';

import { Form, Card, Col, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'sathvik',
      password: '123'
    }
  };

  handleSubmit = (e) => {
    console.log('Name: ', this.state.userName);
    console.log('Pass: ', this.state.password);

  };

  onHandleChange = (e, h) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div>
        {/* <Col style={{width:300}}> */}
        <center>
          <Card style={{ width: 300 }}>
            <Form className="login-form">
              <Form.Item>
                <Input prefix={<Icon type="user" />} onChange={(e) => this.onHandleChange(e)} name="userName" value={this.state.userName} placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<Icon type="lock" />} type="password" name="password" onChange={this.onHandleChange}
                  value={this.state.password} placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                  Forgot password
            </a>
                <Button type="primary" onClick={this.handleSubmit} htmlType="submit" className="login-form-button">
                  Log in
            </Button>
                Or <a href=" ">register now!</a>

              </Form.Item>
            </Form>
          </Card>
          {/* </Col> */}
        </center>
      </div>
    );
  }
}


export default NormalLoginForm;