import Header from "@/components/navigation/main-nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero id="hero" />
      <About id="about" />
      <Features id="features" />
      <ContactUs id="contact" />
    </main>
  );
}
