import React from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap'
import { Row,Col,Menu} from 'antd';
import {Image} from 'semantic-ui-react'
import 'antd/dist/antd.css';
import Caro from './Caro';
import Login from './login';
import { BrowserRouter as Router,Redirect, Route, Link } from "react-router-dom";
import Search from './SearchTrains'
import PNR from './PNR'
import * as firebase from "firebase/app";
import "firebase/auth";
import axios from 'axios'
import Find from './Find'
import SignUp from './SignUp';


var firebaseConfig = {
  apiKey: "AIzaSyB7-qcrNB8r0WYzxv64RubGIa4o3BRt9M4",
  authDomain: "railwayapp-f9cfd.firebaseapp.com",
  databaseURL: "https://railwayapp-f9cfd.firebaseio.com",
  projectId: "railwayapp-f9cfd",
  storageBucket: "",
  messagingSenderId: "910329080491",
  appId: "1:910329080491:web:c5ffbb5080512b81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    this.state={};
    this.state.db={
      searchTrain:
        {
          from:{
            code:[],
            name:[],
        },
        to :{
            code:[],
            name:[],
        },
        date:new Date()
      }
    }
    this.state.db.searchTrain.findTrain=[
            {
              number:"",
              name:"",
              travelTime:"",
              srcStation:"",
              destStation:"",
              departTime:"",
              arrivalTime:"",
              
            }
          ]
    this.state.flag = false;
  }
  componentDidMount(){
    this.checkLogin();

  }
  cal=(e)=>
  {
    let db=this.state.db.searchTrain.date;
    db=e;
    console.log("ANNN")
    this.setState(
      {db:e}
    )
    console.log(this.state.db.searchTrain.date)
  }
  

  sourceName=(e)=>
  {
    console.log('HELLLLLLLLLLL')
    let {db}=this.state;
    //db=e.target.value;
   // console.log(db);
    axios.get("https://api.railwayapi.com/v2/suggest-station/name/"+e.target.value+"/apikey/nq7e78v3j8/")
    .then((res)=>{
      console.log(res.data)
      db.searchTrain.from.name=res.data.stations.map((item)=>{return item.name});
      db.searchTrain.from.code=res.data.stations.map((item)=>{return item.code});
      this.setState(
        {db:db}
      )
   
    })
  }
  destinationName(e){
      
    console.log('HELLLLLLLLLLL')
    let {db}=this.state;
    db=e.target.value;
    axios.get("https://api.railwayapi.com/v2/suggest-station/name/"+e.target.value+"/apikey/nq7e78v3j8/")
    .then((res)=>{
      console.log(res.data)
      db.searchTrain.from.name=res.data.stations.map((item)=>{return item.name});
      db.searchTrain.from.code=res.data.stations.map((item)=>{return item.code});

      this.setState(
        {db:db}
      )
      console.log("from source"+db)
    })
  }
  
  /*
  search(rail){
    let db1=rail.src;
    var db=this.state.db.searchTrain.from;
    console.log("fff"+db1)
    if(rail.flag==1){
      axios.get("https://api.railwayapi.com/v2/name-to-code/name/"+db1+"/apikey/nq7e78v3j8/")
      .then((res)=>{
        db1=res.data.stations.code;
        this.setState(
          {
            db:db1,
            flag:0
          }
        )
      })
      
    }
    console.log("fff"+db1)
    let db2=rail.dest;
    var db=this.state.db.searchTrain.to;

    if(rail.flag1==1)
    {
      axios.get("https://api.railwayapi.com/v2/name-to-code/name/"+db2+"/apikey/nq7e78v3j8/")
      .then((res)=>{
        db2=res.data.stations.code;
        this.setState(
          {
            db:db2,
            flag1:0
          }
        )
      }) 
    }

    this.props.history.push("/find")
  
   
}*/
  /////////Search orginal
 search(rail){
           let db=this.state.db.searchTrain.findTrain.name;
            console.log(rail.date);
            
            console.log("Heloo form search");
            axios.get("https://api.railwayapi.com/v2/between/source/jp/dest/dee/date/26-07-2019/apikey/nq7e78v3j8/")
            .then((res)=>{
              console.log(res.data)
            // // this.state.db.findTrain.number=res.data.trains[0].number;
                //console.log(this.state.db.findTrain.number);
              let i=0;
              for(i=0;i<res.data.total;i++)
              {
  
                  
                  
                //db.number=res.data.trains[i].number;
                let db=this.state.db.searchTrain.findTrain[i].name;
                db=res.data.trains[i].name;
                
                this.setState({
                  db:db
                })
                console.log(this.state.db.searchTrain.findTrain[i]);
                //this.state.db.searchTrain.findTrain[i].name=res.data.trains[i].name;
                
               console.log(db);
                db=this.state.db.searchTrain.findTrain[i].number;
               db=res.data.trains[i].number;
               this.setState({
                 db:db
               })
               this.state.db.searchTrain.findTrain[i].departTime=res.data.trains[i].src_departure_time;
               this.setState({
                 db:this.state.db.searchTrain.findTrain[i].departTime
               })
               this.state.db.searchTrain.findTrain[i].arrivalTime=res.data.trains[i].dest_arrival_time;
               
               this.state.db.searchTrain.findTrain[i].travelTime=res.data.trains[i].travel_time;
               this.state.db.searchTrain.findTrain[i].srcStation=res.data.trains[i].from_station.name;
               this.state.db.searchTrain.findTrain[i].destStation=res.data.trains[i].to_station.name;
                
              /*  db=res.data.trains[i].name;
                db=res.data.trains[i].src_departure_time;
                db  =res.data.trains[i].dest_arrival_time;
                db=res.data.trains[i].travel_time;
                db=res.data.trains[i].from_station.name;
                db=res.data.trains[i].to_station.name;*/

              }
                //console.log(db);
                
               // console.log("RESSSSSSSSSSSSSSS"+res.data.from_station.name)

              
              
             
            })
            
            console.log("");
            
            this.props.history.push("/find")
          
           
  }

    //////////////login with Email and password ////////////


  emailSignIn=()=>{
  
    const email=this.state.email;

    
    const pass=this.state.password;
    
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result)=>{
    
    // The signed-in user info.
    
    var user = result.user;
    
    console.log("email signin",user.displayName,user.email);
    
    this.setState({
    
    user:user})
    
    this.props.history.push('/')
    
    // ...
    
    })
    
    .catch(function(error) {
    
    // Handle Errors here.
    
    var errorCode = error.code;
    
    var errorMessage = error.message;
    
    if (errorCode === 'auth/wrong-password') {
    
    alert('Wrong password.');
    
    } else {
    
    alert(errorMessage);
    
    }
    
    console.log(error);
    
    // ...
    
    });
    
    }


//////create account with email and password ///////////


    emailSignUp=(signup)=>{
        console.log("emailSignUp");
        
      const email=signup.email;
      console.log("mail"+email);
      
      
      const pass=signup.pwd;
      console.log("pwd"+pass);
      
      firebase.auth().createUserWithEmailAndPassword(email, pass).then((result)=>{
      
      // The signed-in user info.
      
      var user = result.user;
      
      this.props.history.push('/Login')
      
      console.log("email signup",user.displayName,user.email);
      
      // ...
      
      })
      
      .catch(function(error) {
      
      // Handle Errors here.
      
      var errorCode = error.code;
      
      var errorMessage = error.message;
      
      if (errorCode == 'auth/weak-password') {
      
      alert('The password is too weak.');
      
      } else {
      
      alert(errorMessage);
      
      }
      
      console.log(error);
      
      });
      
      }
      
      


  ////////SignIn with Google////////
googleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    this.setState(
      {
        flag:true,
        user:user,
      }
    )
    this.props.history.push("/");
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}



            /////////////facebook login////////////
fbSignIn(){
  var provider = new firebase.auth.FacebookAuthProvider();


  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    this.setState(
      {
        flag:true,
        user:user,
      }
    )
    this.props.history.push("/");
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


checkLogin(){
  firebase.auth().onAuthStateChanged((user)=> {
 if (user) {
  this.setState(
    {user:user,
    flag:true}
  )
  
  this.props.history.push("/");
 } else {
   // No user is signed in.
 }
});
}

logout(){
  firebase.auth().signOut().then(() =>{
  this.setState({
    user:null,
    flag:false
  })
  this.props.history.push("/");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


  render()
  {
    return(
              <div>
                
                <Row>
                <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/">
                  <img
                     alt=""
                    src="favicon.ico"
                    width="30"
                    height="30"
                    
                  />
              
                </Navbar.Brand>
                
                <Navbar.Brand  className="offset-sm-10">
                  {(this.state.flag)?<Link to="/logout"><div>
    <Image src={this.state.user.photoURL} avatar />
    <span>{this.state.user.displayName}</span>
  </div>
                  </Link> 
                  :<Link to="/login">{'login'}
                  </Link> }
    
                </Navbar.Brand>
              </Navbar>
                </Row>
                
                  <Row>
                    <Col span={5}>
                    <Menu
                    
                      style={{marginTop:'60px'}}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['1']}
                      mode="inline"
                    >    
                    <Menu.Item key="1">
                      <Link to="/">
                        Home
                        </Link>
                        </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/search">
                      Search Trains
                      </Link>
                      </Menu.Item>
                    <Menu.Item key="3">
                      <Link to ="/pnr">
                        PNR
                        </Link>
                        </Menu.Item>
                 
                      
                    </Menu>
                    </Col >
                    
                    <Col span={19}>
                    <Row>
                    <Route exact path="/" component={Caro}></Route> 
                    <Route path="/login" render={()=><Login fbSignIn={this.fbSignIn.bind(this)} emailSignIn={this.emailSignIn.bind(this)} googleSignIn={this.googleSignIn.bind(this)} ></Login>}></Route>
                    <Route path="/search" render ={()=><Search db={this.state.db} sourceName={this.sourceName.bind(this)}  cal={this.cal.bind(this)} search={this.search.bind(this)}></Search>}/>
                    <Route path="/pnr" component={PNR}/>
                    <Route path="/find" component={Find}/>
                    <Route path="/logout" component={this.logout}/>
                    <Route path="/createaccount" render={()=><SignUp emailSignUp={this.emailSignUp.bind(this)}></SignUp>}/>
                    {/*<Route path="/login" render={()=> <Login ></Login>}/>*/}
                      </Row>
                    </Col>
                    </Row>
              </div>
    );
  }
}
export default App;












