import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import TechStack from "../../components/TechStack";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Footer />
    </>
  );
}

export default Home;