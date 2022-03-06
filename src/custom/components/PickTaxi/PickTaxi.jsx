import React from 'react';
import './PickTaxi.scss';
import Gallery from 'react-grid-gallery';


function PickTaxi() {

    const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
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
                <Gallery images={IMAGES}/>
            </div>
        </section>
  )
}

export default PickTaxi