import React from 'react'
import CursorGlow from '../components/CursorGlow'
import Hero from '../pages/Hero'
import HackerCursor from '../components/HackerCursor'

const MainLayout = () => {
  return (
    <main>
      <HackerCursor />
      <Hero />
    </main>
  )
}

export default MainLayout