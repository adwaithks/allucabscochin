import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import './Carousal.scss';

function Carousal() {
  return (
      <>
    <section className='section-carousel'>
        <Carousel
            className='carousel'
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            showStatus={false}
            showArrows={true}
            autoFocus={true}
        >
                <div className='carousel-img'>
                    <img src="/assets/bannerinnova.jpg" />
                    <h1 className="legend">Cab Services In Cochin</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/greenery.png" />
                    <h1 className="legend">Kerala Holiday Packages</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/airportpackage.jpg" />
                    <h1 className="legend">Airport Pickup</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/weddingpackage.jpg" />
                    <h1 className="legend">Wedding Packages</h1>
                </div>

                <div className='carousel-img'>
                    <img src="/assets/boat.jpg" />
                    <h1 className="legend">Boating Packages</h1>
                </div>
                
            </Carousel>
    </section>
    </>
  )
}

export default Carousal;