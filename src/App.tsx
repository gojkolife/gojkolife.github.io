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
  const byId = (id: string) => photos.find((p) => p.id === id)!;
  const [north, lagoon, haystack, deadvlei, crocodile] = ['north', 'lagoon', 'haystack', 'deadvlei', 'crocodile'].map(byId);

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
          <Chapter photo={deadvlei} index={3} layout="split" reverse />
          <DetailZoom photo={crocodile} index={4} focus={{ x: 49.2, y: 49.7 }} zoom={2.2} hint="Into the eye" />
        </section>
        <Gallery photos={photos} />
      </main>
      <Footer />
    </>
  );
}
