import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedRoutes from "@/components/FeaturedRoutes";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedRoutes />
      <Fleet />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  );
}
