
import React from 'react';
import { Grid,Form, Segment, Icon } from 'semantic-ui-react';

import { BrowserRouter as Redirect ,Route, Link } from "react-router-dom";
const Login=(props)=>{
  return (
    <Grid centered columns={2}>
    <Grid.Column  style={{    marginTop: '200px'}}>
        <Segment stacked>
        <Form size="large">
            <Form.Input
            fluid
            required
            label="Email"
             icon="user"
            placeholer="Email"
            labelPosition="left" 
            iconPosition="left">

            </Form.Input>
            <Form.Input
            fluid
            required
            placeholer="Password"
            label="password" icon="lock"
            labelPosition="left" 
            iconPosition="left"
            type="password"
            >
            </Form.Input>
            <Form.Input
            fluid
            required
            placeholer="Password"
            label="password" icon="lock"
            labelPosition="left" 
            iconPosition="left"
            type="password"
            >
            </Form.Input>
            <Form.Button
             primary 
             
             type="primary" 
             fluid
            size="medium"
             onClick={props.emailSignIn}>
            Log in
            </Form.Button>
          </Form>
          </Segment>
          <Segment>
            <Form>
          <Form.Button
          fluid
           type="default"
           style={{width:'50%'}}>
            <Link to="/createaccount">
            Create Account
          </Link>
          </Form.Button>
          <Form.Button
          color="red"
          fluid
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
          fluid
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