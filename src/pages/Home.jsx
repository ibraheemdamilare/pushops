import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import ChooseUs from '../components/ChooseUs'
import Footer from '../components/Footer'
import PageTop from "../components/PageTop"
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom'

const Home = () => {
  return (
    <>
      <PageTop />
      <Navbar />
      <Header />
      <About />
      <ChooseUs />
      <Footer />
      <Bottom />
    </>
  )
}

export default Home