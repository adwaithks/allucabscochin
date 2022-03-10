import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import './Testimonial.scss';
import {BiUser} from 'react-icons/bi';

function Testimonial() {
  return (
    <section className='testimonial'>
        <div className='testimonial-head'>
            <h1>What Our Guests Say</h1>
        </div>
        <div className='testimonial-carousel-container'>
            <Carousel
                className='testimonial-carousel'
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                swipeable={true}
                showStatus={false}
                showArrows={true}
                autoFocus={true}
            >
                <div className='testimonial-card'>
                    <BiUser className='testimonial-user' />
                    <h1>Libin K Varkey</h1>
                    <h3>It was a different experience altogether with Allu Cabs. Very friendly driver and neat driving. Strongly recommending Allu Cabs!</h3>
                </div>
                <div className='testimonial-card'>
                    <BiUser className='testimonial-user' />
                    <h1>Sneha P</h1>
                    <h3>ആദ്യ യാത്രയിൽ തന്നെ മികച്ച സ്വീകാര്യത നേടിയെടുക്കാനും. മികച്ച സുരക്ഷാ സംവിധാനങ്ങളാലും പ്രീമിയം മോടിഫിക്കേഷൻസുകളാലും കുറഞ്ഞ കാലം കൊണ്ട് കൂടുതൽ ഉപഭോക്താക്കളെ നേടിയെടുക്കാനും കഴിഞ്ഞു എന്നതിൽ അത്ഭുതം ഏതുമില്ല...യാത്രക്കാർക്കിതൊരു വേറിട്ട അനുഭവം തന്നെയായിരിക്കും...</h3>
                </div>
                <div className='testimonial-card'>
                    <BiUser className='testimonial-user' />
                    <h1>Adwaith KS</h1>
                    <h3>Finest Service. Best in Class!</h3>
                </div>
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonial