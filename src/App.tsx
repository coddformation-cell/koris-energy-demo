import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Expertises from './pages/Expertises';
import Solutions from './pages/Solutions';
import Projets from './pages/Projets';
import ProjectDetail from './pages/ProjectDetail';
import Referentiels from './pages/Referentiels';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_SELECTOR =
  '[data-reveal], .section-head, .capability-card, .solution-card, .project-card, .testimonial-card, .about-value, .process-step, .standard-item, .figure-item, .home-expertise-main, .home-expertise-card, .home-solution-row, .home-project-card, .capability-alt-row, .methodology-step, .timeline-step, .referentiels-step, .project-gallery-item, .project-block';

function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function useReveal(pathname: string) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    const id = window.setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => obs.observe(el));
    }, 50);
    return () => {
      window.clearTimeout(id);
      obs.disconnect();
    };
  }, [pathname]);
}

function AppShell() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <RouteScrollReset />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/referentiels" element={<Referentiels />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
