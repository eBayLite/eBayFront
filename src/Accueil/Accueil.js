
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import EnchereList from './../componentsE/EnchereList';
import ProductList from './../componentsV/ProductList';

let CarouselPage = () => {
  return (
    <div>
    <MDBContainer autoPlay className="col-md-12">
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-2"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="imgC/1.jpg"
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
              src="imgC/2.jpg"
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
              src="imgC/3.png"
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

    <div  className="col-md-12">
    <EnchereList />
    </div>
    <div className="col-md-12">
    <ProductList />
    </div>
    </div>
  );
}

export default CarouselPage;
