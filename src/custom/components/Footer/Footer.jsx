import React from 'react';
import './Footer.scss';
import {BsFacebook, BsWhatsapp} from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-end">
        <div className="footer-info">
            <div className="allucabs-info">
                <div className="allucabs-info-head">
                    <h2>Allu Cabs Cochin</h2>
                </div>
                <div className="allucabs-info-desc">
                    <h4>Allu Cabs Cochin, offer unique taxi cab tours of Cochin/Ernakulam and the surrounding tourist places.</h4>
                </div>
                <div className="social-links">
                    <BsFacebook />
                    <BsWhatsapp />
                </div>
            </div>
            <div className="footer-picktaxi">
                <div className="footer-picktaxi-head">
                    <h2>Pick Your Taxi</h2>
                </div>
                <div className="footer-picktaxi-cars">
                    <h4>Toyota Innova Crysta</h4>
                    <h4>Ford Aspire</h4>
                    <h4>Toyota Etios</h4>
                    <h4>Swift Dzire</h4>
                    <h4>Maruti Suzuki Ertiga</h4>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-info-head">
                    <h2>Contact Information</h2>
                </div>
                <div className="contact-info-details">
                    <h4>48/1238, Puthiyedath by Lane 1, Vytila, Ernakulam - 682019 , Kerala</h4>
                    <h4>Phone: </h4>
                    <h4>Email: </h4>
                </div>
                
            </div>
        </div>
        <div className="footer-copyright">
            <h5>Copyright ©2022 All rights reserved | Crafted with ❤ by KS</h5>
        </div>
    </footer>
  )
}

export default Footer