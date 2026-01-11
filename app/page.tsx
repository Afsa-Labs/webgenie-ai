import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
       <Services />
      <Footer />
    </main>
  );
}
