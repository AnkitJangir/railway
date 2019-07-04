import React from 'react'
import {Message,Form,Grid,Button, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Search=(props)=>{
 

 
  let src;
  let dest;
     let date=new Date();
     let flag=0;
     let flag1=0;
     console.log(props.db.searchTrain.from.name)
    return(
    <Grid centered columns={2}>
    <Grid.Column style={{    marginTop: '200px'}}>
   <Segment>
      <Form size="large">
       <Form.Dropdown
        search
        selection
        fluid
        placeholder="Source Station" 
        onSearchChange={props.sourceName}
        options={props.db.searchTrain.from.name}
        />
        <Form.Dropdown 
        search
        selection 
        fluid
        placeholder="Destination Station"
         onChange={props.destinaiton}
        
         />
       <Form.Input type="date" placeholder="dd/mm/yyyy" onChange={(e)=>{date=e.target.value}}></Form.Input>
       <Form.Input placeholder="source" 
       onChange={(e)=>{{src=e.target.value} {(true)?flag=1:flag=0}}}>
        
        </Form.Input>
       <Form.Input placeholder="dest"
       onChange={(e)=>{{dest=e.target.value}{(true)?flag1=1:flag1=0}}}>
         

       
       </Form.Input>
        <Button fluid size="medium" onClick={()=>{props.search({src,dest,date,flag,flag1})}}><Link to ="/findtrain">Search</Link></Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
  
    );
 }
 export default Search;

