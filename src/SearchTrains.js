import React from 'react'
import {Message,Form,Grid,Button, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Search=(props)=>{
 

 
  let src;
  let dest;
     let date=new Date();
     let flag=0;
     let flag1=0;
     
    return(
    <Grid centered columns={2}>
    <Grid.Column style={{    marginTop: '200px'}}>
   <Segment>
      <Form size="large">
       <Form.Dropdown
        search
        selection
        fluid
        required
        label="source station"
        placeholder="Source Station" 
        onSearchChange={props.sourceName}
        options={props.db.searchTrain.from.name}
        />
        <Form.Dropdown 
        search
        label="destination station"
        selection 
        required
        fluid
        placeholder="Destination Station"
         onChange={props.destinaiton}
        
         />
       <Form.Input type="date" placeholder="dd/mm/yyyy" onChange={(e)=>{date=e.target.value}}></Form.Input>
        <Button fluid size="medium"   onClick={()=>{props.search({src,dest,date,flag,flag1})}}><Link to ="/findtrain">Search</Link></Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
  
    );
 }
 export default Search;

