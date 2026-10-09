import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Solutions,
  Pricing,
  Testimonials,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Solutions />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
