import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import PortfolioTimeline from './components/experience/PortfolioTimeline'
import Cursor from './components/ui/Cursor'

const App = () => {
  return (
    <>
      <Cursor />
      {/* <StatefulButtonDemo /> */}
      <Header />
      <Nav />
      <About />
      <PortfolioTimeline />
      <Experience />
    </>
  )
}

export default App
