import React, {useEffect, useState} from 'react';
import './PickTaxi.scss';
import { Carousel } from 'react-responsive-carousel';


function PickTaxi() {

    const [mobileSlider, setMobileSlider] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 415) {
            setMobileSlider(true);
        } else {
            setMobileSlider(false);
        }
    }, []);

    const IMAGES =
    [{
            src: "/assets/car1.jpg",
            thumbnail: "/assets/car1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Innova Crista"
    },
    {
        src: "/assets/car2.jpg",
        thumbnail: "/assets/car2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Etios"
    },
    {
        src: "/assets/car3.jpg",
        thumbnail: "/assets/car3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Swift Dzire"
    },
    {
        src: "/assets/car4.jpg",
        thumbnail: "/assets/car4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Force Traveller"
    },
    {
        src: "/assets/car6.jpg",
        thumbnail: "/assets/car6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Ertiga"
    },
    {
        src: "/assets/car7.jpg",
        thumbnail: "/assets/car7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Traveller"
    },
    {
        src: "/assets/car8.jpg",
        thumbnail: "/assets/car8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Ford Aspire"
    }
]


  return (
        <section className='section-picktaxi'>
            <dir className='picktaxi-head'>
                <h1>Pick Your Taxi</h1>
            </dir>
            <div className='picktaxi-info'>
                <h4>Explore our modern fleet with a large number of options including both A/C and Non A/C cabs from Ford, Toyota, Hyundai, Maruti, Tata, Mercedes-Benz etc.</h4>
                <h5>(Additional Charges: Rs 500 Driver bata per day, Interstate Permit Charges.)</h5>
            </div>
            {
                (!mobileSlider) ? (
                    <div className='picktaxi-collection'>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[0].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Innova Crista</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[1].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Etios</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[2].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Swift Dzire</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[3].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Force Traveller</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[4].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Ertiga</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[5].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Innova</h4>
                        </div>
                        <div className='picktaxi-img-wrap'>
                            <img className='picktaxi-img' src={IMAGES[6].src} loading="lazy" alt="" />
                            <h4 className='picktaxi-img-desc'>Ford Aspire</h4>
                        </div>
                    </div>
                ) : (
                    <div className='picktaxi-collection-mob'>
                        <Carousel
                        className='picktaxi-mob-carousel'
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        swipeable={true}
                        showStatus={false}
                        showArrows={true}
                        autoFocus={true}
                    >   
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[0].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Innova Crista</h4>
                            </div>
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[1].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Etios</h4>
                            </div>
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[2].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Swift Dzire</h4>
                            </div>
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[3].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Force Traveller</h4>
                            </div>
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[4].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Ertiga</h4>
                            </div>  
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[5].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Innova</h4>
                            </div>
                            <div className='picktaxi-img-wrap-mob'>
                                <img className='picktaxi-img-mob' src={IMAGES[6].src} loading="lazy" alt="" />
                                <h4 className='picktaxi-img-desc-mob'>Ford Aspire</h4>
                            </div>
                        </Carousel> 
                    </div>
                )
            }
        </section>
  )
}

export default PickTaxi