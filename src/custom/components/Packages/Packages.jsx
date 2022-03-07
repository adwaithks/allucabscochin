import React from 'react';
import './Packages.scss';

function Packages() {
  return (
    <div className="packages">
        <div className="packages-head">
            <h1>Most Popular Holiday Packages</h1>
            <h4>We offer you exclusive Kerala Holiday Packages that will gift you and your family with a thrilling Kerala experience!</h4>
        </div>

            <div className="packages-info">

                <div className="packages-img">
                    <div>
                        <img src="/assets/munnar.jpg" alt="" />
                        <h5>Munnar</h5>
                    </div>

                    <div>
                        <img src="/assets/thekkady.jpg" alt="" />
                        <h5>Thekkady</h5>
                    </div>

                    <div>
                        <img src="/assets/alleppey.jpg" alt="" />
                        <h5>Aleppey</h5>
                    </div>

                    <div>
                        <img src="/assets/kovalam.jpg" alt="" />
                        <h5>Kovalam</h5>
                    </div>
                </div>

                <div className="packages-right">
                    <div className="about-kochi">
                        <div className="about-kochi-head">
                            <h1>About Kochi</h1>
                        </div>
                        <div className="about-kochi-desc">
                            <h5>Kochi also known as Cochin, is a major port city on the south-west coast of India bordering the Laccadive Sea. It is part of the district of Ernakulam in the state of Kerala and is often referred to as Ernakulam. Called the Queen of the Arabian Sea, Kochi was an important spice trading centre on the west coast of India from the 14th century onward. Kochi ranks first in the total number of international and domestic tourist arrivals in Kerala.</h5>
                        </div>
                    </div>
                </div>

        </div>
    </div>
)}

export default Packages