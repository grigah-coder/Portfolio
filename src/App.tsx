import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Ticker } from "./components/Ticker";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
