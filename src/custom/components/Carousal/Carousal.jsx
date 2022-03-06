import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import './Carousal.scss';
import Navbar from '../Navbar/Navbar';

function Carousal() {
  return (
      <>
    <section className='section-carousel'>
        <Carousel
            className='carousel'
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={false}
            showStatus={false}
            showArrows={true}
            autoFocus={true}
            animationHandler={"fade"}
        >
                <div className='carousel-img'>
                    <img src="/assets/bannerinnova.png" />
                    <h1 className="legend">Cab Services In Cochin</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/greenery.png" />
                    <h1 className="legend">Kerala Holiday Packages</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/houseboat.png" />
                    <h1 className="legend">House Boat Packages</h1>
                </div>
                
            </Carousel>
    </section>
    </>
  )
}

export default Carousal;