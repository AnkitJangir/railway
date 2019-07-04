import React from 'react';
import { Grid,Form, Segment } from 'semantic-ui-react';
import { BrowserRouter as Redirect ,Route, Link } from "react-router-dom";


const SignUp=(props)=>{
    let email;
    let pwd;
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
                iconPosition="left"
                onChange={(e)=>{email=e.target.value}}>

                </Form.Input>
                
                <Form.Input
                fluid
                placeholer="Enter the password"
                label="password" icon="lock"
                labelPosition="left" 
                iconPosition="left"
                onChange={(e)=>{pwd=e.target.value}}
                >
                </Form.Input>
                <Form.Button
                onClick={()=>props.emailSignUp}
                 secondary >
                <Link to="/login">
                Register
                </Link>
               
                </Form.Button>
            </Form>
            </Segment>
        </Grid.Column>
    </Grid>
);
}

export default SignUp;
