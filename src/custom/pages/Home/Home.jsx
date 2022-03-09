import React from 'react';
import Services from '../../components/Services/Services';
import PickTaxi from '../../components/PickTaxi/PickTaxi';
import Carousal from '../../components/Carousal/Carousal';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Packages from '../../components/Packages/Packages';
import Testimonial from '../../components/Testimonial/Testimonial';
import Float from '../../components/Float/Float';

function Home() {
  return (
    <>
        <Navbar />
        <Carousal />
        <Services />
        <PickTaxi />
        <Packages />
        <Testimonial />
        <Float />
        <Footer />
    </>
  )
}

export default Home