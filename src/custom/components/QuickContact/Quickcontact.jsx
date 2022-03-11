import React from 'react';
import './Quickcontact.scss';
import {IoCall} from 'react-icons/io5';

function Quickcontact() {
  return (
    <section className='quick-contact-section'>
        <div className='quick-contact-container'>
            <IoCall className='quick-call-callicon' />
            <h4>Get Instant Booking</h4>
            <h1>+91 85908 68047</h1>
        </div>
    </section>
  )
}

export default Quickcontact