import React from 'react';
import {IoBoatOutline, IoPaperPlaneOutline} from 'react-icons/io5';
import {AiOutlineCar} from 'react-icons/ai';
import './Services.scss';

function Services() {
  return (
    <section className='section-services'>
        <div className='services-head'><h1>Our Services</h1></div>
        <div className='services-collection'>
        <div className='card'>
            <div className='card-img'>
                <IoBoatOutline />
            </div>
            <div className='card-desc'>
                <h1>Backwater Cruises</h1>
                <h4>We have several special packages, ranging from Kerala houseboat packages for sightseeing to special honeymoon houseboat packages.</h4>
            </div>
            <div className='card-more'>
                <button>Know More</button>
            </div>
        </div>

        <div className='card'>
            <div className='card-img'>
                <AiOutlineCar />
            </div>
            <div className='card-desc'>
                <h1>Book Your Taxi</h1>
                <h4>Allu Cabs Cochin knows what their client expect and deserve, so all customers are treated with royalty. Our taxi rates are really affordable worth the money.</h4>
            </div>
            <div className='card-more'>
                <button>Know More</button>
            </div>
        </div>    

        <div className='card'>
            <div className='card-img'>
                <IoPaperPlaneOutline />
            </div>
            <div className='card-desc'>
                <h1>Holiday Packages</h1>
                <h4>We offer you exclusive Kerala Holiday Packages that will gift you and your family with a thrilling Kerala experience.</h4>
            </div>
            <div className='card-more'>
                <button>Know More</button>
            </div>
        </div> 
        </div>           
    </section>
  )
}

export default Services