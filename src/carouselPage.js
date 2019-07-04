import React from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView,  MDBContainer ,Button } from 'mdbreact';
import {Grid} from 'semantic-ui-react'

const CarouselPage = () => {
  return (<div>
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        //className="z-depth-1"
      >
        <MDBCarouselInner >
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                             
              className="d-block w-80"
                src="banner_2n.png"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-80"
                src="download.jpeg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-80"
                src="download (1).jpeg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <br/>
    <br/>
    <br/>
    <Grid centered columns={3} style = {{marginLeft: '256px'}}>
    <Grid.Column textAlign='center'>
    <Button type="link">
    <img 
    src="booking.jpg"
    width="30"
    height="30"
     alt=""/>
     <br/>
     Search Trains</Button>
     </Grid.Column>
     <Grid.Column textAlign='center'>
      <Button type="default">PNR status</Button></Grid.Column>
      <Grid.Column textAlign='center'><Button type="link">Live status</Button></Grid.Column>
      </Grid>
   </div>
  );
}
export default CarouselPage;