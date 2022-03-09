import React from 'react';
import './Float.scss';
import {BsWhatsapp} from 'react-icons/bs';

function Float() {
  return (
    <div className='floater'>
        <BsWhatsapp onClick={() => {
            window.open('https://web.whatsapp.com/send?phone=+918590868047&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', "_blank")   
        }} />
    </div>
  )
}

export default Float