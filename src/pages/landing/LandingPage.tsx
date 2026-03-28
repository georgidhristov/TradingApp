import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Value from "./components/Value";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      <Hero />
      <Problem />
      <FeaturesSection />
      <Value />
      <Waitlist />
      <Footer />
    </div>
  );
}
