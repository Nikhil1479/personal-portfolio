import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import PortfolioTimeline from './components/experience/PortfolioTimeline'
const App = () => {
  return (
    <>
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
