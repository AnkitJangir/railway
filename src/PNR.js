import React from 'react';
import {Grid,Form,Button,Segment} from 'semantic-ui-react'

const PNR=()=>
{
    return (
        <div>
        <Grid centered columns={3}>
    <Grid.Column style={{    marginTop: '153px'
}}>
      <Segment>
      <Form size="large">
        <Form.Input label="PNR no." required placeholder="10 digit PNR no."/>
        <Button type="link" color="facebook" >Search</Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
 
        </div>

    )
}
export default PNR;