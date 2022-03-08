import React from 'react';
import './PickTaxi.scss';
import Gallery from 'react-grid-gallery';


function PickTaxi() {

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

            </div>
        </section>
  )
}

export default PickTaxi