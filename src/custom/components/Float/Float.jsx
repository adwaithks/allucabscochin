import React from 'react';
import './Float.scss';
import {BsWhatsapp} from 'react-icons/bs';
import {IoCall} from 'react-icons/io5';

function Float() {
  return (
    <div className='floater'>
        <IoCall className='call-float' onClick={() => {
          window.open('tel:+918590868047', '_blank');
        }} />
        <BsWhatsapp className='whats-float' onClick={() => {
            window.open('https://api.whatsapp.com/send?phone=+918590868047&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', "_blank")   
        }} />
    </div>
  )
}

export default Float;