import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Capabilities from './sections/Capabilities';
import Solutions from './sections/Solutions';
import Standards from './sections/Standards';
import Projects from './sections/Projects';
import KeyFigures from './sections/KeyFigures';
import Process from './sections/Process';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import CTAFinal from './sections/CTAFinal';
import Contact from './sections/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

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

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -70 });
    };
    document.addEventListener('click', onAnchorClick);

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document
      .querySelectorAll(
        '[data-reveal], .section-head, .capability-card, .solution-card, .project-card, .testimonial-card, .about-value, .process-step, .standard-item, .figure-item'
      )
      .forEach((el) => reveal.observe(el));

    return () => {
      document.removeEventListener('click', onAnchorClick);
      gsap.ticker.remove(raf);
      reveal.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Solutions />
        <Standards />
        <Projects />
        <KeyFigures />
        <Process />
        <About />
        <Testimonials />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
