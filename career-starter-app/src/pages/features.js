import React from 'react'
import Navbar from '../components/Navbar'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { MAX_WIDTH } from '../utils/consts'
import Footer from '../components/Footer'
import Sponsors from '../components/Sponsors'
import Features from '../components/Features'
import image from "../img/boss.png"

export default function featurePage() {
  return (
    <>
    <Navbar />
      <MaxWidthWrapper val={MAX_WIDTH}>
        <div className="relative isolate px-6 py-20 font-bold lg:px-8">
          <Features
            title="Features for Career Starter"
            image={image}
          />
        </div>
        <Sponsors />
        <Footer />
      </MaxWidthWrapper>
    </>
  )
}
