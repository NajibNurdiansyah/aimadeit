import { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import ProjectsPage from './components/ProjectsPage';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

type PageView = 'home' | 'projects';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>(() =>
    window.location.hash === '#projects' ? 'projects' : 'home'
  );
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedBudget, setPreselectedBudget] = useState('');
  const [preselectedNote, setPreselectedNote] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#projects') {
        setActivePage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateHome = (sectionId?: string) => {
    setActivePage('home');
    if (sectionId && sectionId !== 'top') {
      window.history.replaceState(null, '', `#${sectionId}`);
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 40);
      });
    } else {
      window.history.replaceState(null, '', '#top');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openProjectsPage = () => {
    setActivePage('projects');
    window.history.replaceState(null, '', '#projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (activePage !== 'home') {
      navigateHome('contact');
      return;
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    navigateHome('contact');
  };

  const handleSelectPlan = (serviceName: string, budget: string) => {
    setPreselectedService(serviceName);
    setPreselectedBudget(budget);
    navigateHome('contact');
  };

  const handleRequestSimilar = (projectTitle: string) => {
    setPreselectedService('Custom AI Creative Campaign');
    setPreselectedNote(
      `Interested in a creative direction similar to: ${projectTitle}.`
    );
    navigateHome('contact');
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F1E8]">
      <Navbar
        activePage={activePage}
        onStartProject={scrollToContact}
        onNavigateHome={navigateHome}
        onOpenProjects={openProjectsPage}
      />
      <main>
        {activePage === 'projects' ? (
          <ProjectsPage
            onBackHome={() => navigateHome('top')}
            onRequestSimilar={handleRequestSimilar}
          />
        ) : (
          <>
            <HeroSection onStartProject={scrollToContact} />
            <AboutSection />
            <ServicesSection onSelectService={handleSelectService} />
            <PortfolioSection
              onRequestSimilar={handleRequestSimilar}
              onViewAllProjects={openProjectsPage}
            />
            <ProcessSection />
            <PricingSection onSelectPlan={handleSelectPlan} />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection
              preselectedService={preselectedService}
              preselectedBudget={preselectedBudget}
              preselectedNote={preselectedNote}
            />
          </>
        )}
      </main>
      <Footer
        onSelectService={handleSelectService}
        onOpenProjects={openProjectsPage}
        onNavigateHome={navigateHome}
      />
    </div>
  );
}
