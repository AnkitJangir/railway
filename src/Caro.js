import { Row,Col, Button } from 'antd';
import React from 'react';
import {Carousel} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './SearchTrains';

const Caro=()=>{
    return (
      <div>
       
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="jodhpur.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="chittorgarh.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>
<Row  style={{marginTop:'100px',marginLeft:'100px',marginBottom:'100px'}}>
                        <Col span={8}>
                        <Link to="/search">
                          <Button type="link" >
                          
                            <img 
                          width="50" 
                          height="50"                     
                          src="booking.jpg"
                          alt="Search trains"
                          
                            /><br></br>
                            
                          Search Trains </Button>
                          </Link>
                        </Col>
                        <Col span={8}>
                        <Link to="/pnr">
                          <Button type="link">
                          <img 
                          width="50" 
                          height="50"                     
                          src="pnr3.jpg"
                          alt="pnr status"
                            /><br></br>
                            PNR
                            </Button>
                            </Link>
                        </Col>
                        
                        <Col span={8}>
                          <Link to="/livestatus">
                          <Button type="link">
                          <img 
                          width="50" 
                          height="50"                     
                          src="live2.jpg"
                          alt="live status"
                          
                            />
                            <br></br>
                          Live Status</Button>
                          </Link>
                        </Col>
                      </Row>
                     
                      

                      </div>
                      
    );
}
/*function onChange(a, b, c) {
  console.log(a, b, c);
}

const Caro=()=>{
    return (
        <div>
      <Carousel 
      style={{marginTop:'200px'}}
      afterChange={onChange}
        autoplay='true'
        arrows='true'
        draggable='true'
      >
    <div>
    <img 
        width="100%"    
        height="100%"                  
        src="chittorgarh.jpeg"
        alt="First slide"
        />
    </div>
    <div>
    <img 
        width="100%"                      
        src="lake.jpeg"
        alt="Second  slide"
        height="100%"
        />
    </div>
    <div>
    <img 
    width="100%"
    height="100%"                      
        src="jodhpur.jpeg"
        alt="Third slide"
        />
    </div>
    
  </Carousel>
                      <Row style={{marginTop:'100px',marginLeft:'100px',marginBottom:'100px'}}>
                        <Col span={8}>
                          
                          <Button type="link" >
                            <img 
                          width="50" 
                          height="50"                     
                          src="booking.jpg"
                          alt="Search trains"
                          
                            /><br></br>
                          Search Trains</Button>

                        </Col>
                        <Col span={8}>
                          <Button type="link">
                          <img 
                          width="50" 
                          height="50"                     
                          src="pnr3.jpg"
                          alt="pnr status"
                          
                            /><br></br>
                            PNR</Button>
                        </Col>
                        
                        <Col span={8}>
                          <Button type="link">
                          <img 
                          width="50" 
                          height="50"                     
                          src="live2.jpg"
                          alt="live status"
                          
                            />
                            <br></br>
                          Live Status</Button>
                        </Col>
                      </Row>
  </div>
    );
}*/

export default Caro;