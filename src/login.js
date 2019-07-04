
import React from 'react';
import { Grid,Form, Segment, Icon } from 'semantic-ui-react';

import { BrowserRouter as Redirect ,Route, Link } from "react-router-dom";
const Login=(props)=>{
  return (
    <Grid centered columns={2}>
    <Grid.Column  style={{    marginTop: '200px'}}>
        <Segment>
        <Form size="large">
            <Form.Input
            fluid
            label="Email"
             icon="mail"
            placeholer="Enter the email"
            labelPosition="left" 
            iconPosition="left">

            </Form.Input>
            
            <Form.Input
            fluid
            placeholer="Enter the password"
            label="password" icon="lock"
            labelPosition="left" 
            iconPosition="left"
            >
            </Form.Input>
            <Form.Button
             primary 
             type="primary" 
            size="medium"
             onClick={props.emailSignIn}>
            Log in
            </Form.Button>
          </Form>
          </Segment>
          <Segment>
            <Form>
          <Form.Button
          
           type="default"
           style={{width:'50%'}}>
            <Link to="/createaccount">
            Create Account
          </Link>
          </Form.Button>
          <Form.Button
          secondary
          iconPosition="right" 
          type="dashed" 
          onClick={props.googleSignIn}>
            Signup With Google
            <Icon name="google"></Icon>
            </Form.Button>
            <Form.Button
          primary
          iconPosition="right" 
          type="dashed" 
          onClick={props.fbSignIn}>
            Signup With Facebook
            <Icon name="facebook"></Icon>
            </Form.Button>
    </Form>
    </Segment>
    </Grid.Column>
    </Grid>
  )
}


export default Login;