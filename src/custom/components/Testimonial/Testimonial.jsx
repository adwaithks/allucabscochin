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
                    <img src="/assets/libin.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Libin K Varkey</h1>
                    <h3>It was a different experience altogether with Allu Cabs. Very friendly driver and neat driving. Strongly recommending Allu Cabs!</h3>
                </div>
                <div className='testimonial-card'>
                    <img src="/assets/amrita.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Amrita</h1>
                    <h3>Service has been excellent! The driver was very polite, professional as well as very accomodating. Also the fare was reasonable.</h3>
                </div>
                <div className='testimonial-card'>
                    <img src="/assets/unaise.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Unaise</h1>
                    <h3>Roaming around in Kerala with Allu Cabs is not only a wonderful, but also an affordable experience. Just want to give a shoutout to my driver - Ramesh Nair</h3>
                </div>
                <div className='testimonial-card'>
                    <img src="/assets/mamitha.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Mamitha</h1>
                    <h3>Awesome service! Professional dealing. Highly Recommending!</h3>
                </div>
                <div className='testimonial-card'>
                    <img src="/assets/shahana.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Shahana</h1>
                    <h3>Very good experience. Forgot my wallet in the cab...Allu cabs reached out to me, they brought it to my place. Appreciated!</h3>
                </div>
                <div className='testimonial-card'>
                    <img src="/assets/prasad.jpeg" alt="" className="testimonial-user-pic" />
                    <h1>Prasad</h1>
                    <h3>This is a one stop place for cabs. Highly recommending it! Give it a go!</h3>
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