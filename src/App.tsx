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
import Referentiels from './pages/Referentiels';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

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
      document
        .querySelectorAll(
          '[data-reveal], .section-head, .capability-card, .solution-card, .project-card, .testimonial-card, .about-value, .process-step, .standard-item, .figure-item'
        )
        .forEach((el) => obs.observe(el));
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
