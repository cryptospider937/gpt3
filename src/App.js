import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <div className="max-width-container">
            <Navbar />
            <Header />
          </div>
        </div>
        <div className="max-width-container">
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}

export default App