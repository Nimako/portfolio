'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'

const VoiceAssistant = dynamic(() => import('@/components/VoiceAssistant'), {
  ssr: false,
})

export default function Home() {
  useEffect(() => {
    // Set default theme
    const currentTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <VoiceAssistant />
    </>
  )
}

