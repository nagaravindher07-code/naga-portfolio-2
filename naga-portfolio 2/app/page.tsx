import Loader from '@/components/Loader';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollProgress from '@/components/ScrollProgress';
import Atmosphere from '@/components/Atmosphere';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Disciplines from '@/components/sections/Disciplines';
import Gear from '@/components/sections/Gear';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Cursor />
      <Atmosphere />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Disciplines />
        <Gear />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
