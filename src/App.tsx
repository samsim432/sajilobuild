import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import ExamplePrompts from "./components/landing/ExamplePrompts";
import BuildCategories from "./components/landing/BuildCategories";
import HowItWorks from "./components/landing/HowItWorks";
import Features from "./components/landing/Features";
import FinalCTA from "./components/landing/FinalCTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <ExamplePrompts />

        <BuildCategories />

        <HowItWorks />

        <Features />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;