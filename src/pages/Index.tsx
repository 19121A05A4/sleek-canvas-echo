import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import BlogsSection from '@/components/BlogsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div id="about" style={{ display: 'none' }}>
        <AboutSection />
      </div>
      <WorkSection />
      <BlogsSection />
      <div id="projects" style={{ display: 'none' }}>
        <ProjectsSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
