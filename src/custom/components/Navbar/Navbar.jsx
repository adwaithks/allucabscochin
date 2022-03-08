import React, {useEffect, useState} from 'react';
import './Navbar.scss';

function Navbar() {

    const [navbarStyles, setNavbarStyles] = useState(1);

    useEffect(() => {
        try {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 425) {
                    setNavbarStyles(2)
                } else if (window.scrollY < 425) {
                    setNavbarStyles(1)
                }
            })
        } catch {
            console.log('err');
        }
    }, [])


    const navbarStyle1 = {
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        zIndex: 10
    }

    const navbarStyle2 = {
        backgroundColor: 'rgba(24, 24, 24, 0.76)',
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        zIndex: 10
    }

  return (
    <div className='navbar' style={navbarStyles === 1 ? navbarStyle1 : navbarStyle2}>
        <div className='logo-container'>
            <img src="/assets/logowhite.png" alt="" />
        </div>
        <div className='nav-options'>
            <h3 className='nav-link' onClick={() => {

            }}>Home</h3>
            <h3 className='nav-link' onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
            }}>Contact Us</h3>
        </div>
    </div>
  )
}

export default Navbar