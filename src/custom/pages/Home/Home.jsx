import React from 'react';
import Services from '../../components/Services/Services';
import PickTaxi from '../../components/PickTaxi/PickTaxi';
import Carousal from '../../components/Carousal/Carousal';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
        <Navbar />
        <Carousal />
        <Services />
        <PickTaxi />
    </>
  )
}

export default Home