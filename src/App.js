import logo from './logo.svg';
import './App.css';

import { Navbar}  from './components/navbar/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services/services';
import { Tours } from './components/tours/tours';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
