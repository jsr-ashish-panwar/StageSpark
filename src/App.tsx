import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingElements from './components/FloatingElements';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900">
      <FloatingElements />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
