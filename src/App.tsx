import { useSmoothScroll } from './hooks/useSmoothScroll';
import { photos } from './photos';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Chapter from './sections/Chapter';
import DetailZoom from './sections/DetailZoom';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';

export default function App() {
  useSmoothScroll();
  const [north, lagoon, haystack] = photos;

  return (
    <>
      <header className="site-header">
        <a href="#top" className="wordmark">Gojkolife</a>
        <nav aria-label="Main">
          <a href="#stories">Stories</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="top">
        <Hero photo={north} />
        <Intro />
        <section id="stories" aria-label="Stories">
          <Chapter photo={haystack} index={1} layout="split" />
          <DetailZoom photo={lagoon} index={2} focus={{ x: 48.4, y: 51.1 }} />
        </section>
        <Gallery photos={photos} />
      </main>
      <Footer />
    </>
  );
}
