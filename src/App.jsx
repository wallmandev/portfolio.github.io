import Header from "./components/header";
import Hero from "./Hero";
import Work from "./Work";
import Projects from "./Projects";
import About from "./About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Work />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
