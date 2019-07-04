import React from 'react'
import {Grid,Card,Icon} from 'semantic-ui-react'
const Find=()=>{
    return(
      <Grid centered columns={2} >
      <Grid.Column style={{marginTop:"150px"}}>
      <Card >
    <Card.Content header='About Amy' />
    <Card.Content description="dddddddd"/>
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
      </Grid.Column>
      </Grid>
    );
}

export default Find;