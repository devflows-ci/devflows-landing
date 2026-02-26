import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import HowItWorks from "../components/HowItWorks";
import Integrations from "../components/Integrations";
import TaskAutomation from "../components/TaskAutomation";
import CTA from "../components/CTA";

export default function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <TaskAutomation />
      <CTA />
      <Pricing />
    </>
  );
}
