import React from 'react';

import '/src/App.css'
import Navbar from '/src/components/Navbar'
import Hero from '/src/components/Hero'
import Features from '/src/components/Features'
import Footer from '/src/components/Footer';

function Home() {

  return (
    <>
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
    </>
  )
}

export default Home;
