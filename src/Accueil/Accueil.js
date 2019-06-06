import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

let CarouselPage = () => {
  return (
    <MDBContainer autoPlay>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="imgC\p1.png"
              alt="First slide"
            />
          
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Enchères à ne pas rater</h3>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="imgC\p1.png"
              alt="Second slide"
            />
          
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Produits </h3>
          
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="imgC\p2.png"
              alt="Third slide"
            />
          
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Offres uniques</h3>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
