import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import BlogsSection from '@/components/BlogsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleSectionChange = () => {
      const hash = window.location.hash
      if (hash === '#about') {
        setCurrentSection('about')
      } else if (hash === '#projects') {
        setCurrentSection('projects')
      } else if (hash === '#work') {
        setCurrentSection('work')
      } else if (hash === '#blogs') {
        setCurrentSection('blogs')
      } else if (hash === '#contact') {
        setCurrentSection('contact')
      } else {
        setCurrentSection('home')
      }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleSectionChange)
    
    // Check initial hash
    handleSectionChange()

    return () => window.removeEventListener('hashchange', handleSectionChange)
  }, [])

  // Render only the selected section when navigating via tabs
  if (currentSection === 'about') {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation currentSection={currentSection} />
        <AboutSection />
      </div>
    )
  }

  if (currentSection === 'projects') {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation currentSection={currentSection} />
        <ProjectsSection />
      </div>
    )
  }

  if (currentSection === 'work') {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation currentSection={currentSection} />
        <WorkSection />
      </div>
    )
  }

  if (currentSection === 'blogs') {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation currentSection={currentSection} />
        <BlogsSection />
      </div>
    )
  }

  if (currentSection === 'contact') {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation currentSection={currentSection} />
        <ContactSection />
      </div>
    )
  }

  // Default home view with scrollable sections
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} />
      <HeroSection />
      <WorkSection />
      <BlogsSection />
      <Footer />
    </div>
  );
};

export default Index;
