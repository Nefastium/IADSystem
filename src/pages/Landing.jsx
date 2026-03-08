import Hero from "../components/landing/Hero";
import Problema from "../components/landing/Problema";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">

      <Hero />

      <Problema />

      <Features />

      <CTA />

      <Footer />

    </div>
  );
}