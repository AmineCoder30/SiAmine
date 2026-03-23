import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { generateStaticParams } from "@/lib/i18n";

export { generateStaticParams };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
