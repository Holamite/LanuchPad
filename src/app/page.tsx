import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import FAQ from "@/components/Home/FAQ";
import HeroSection from "@/components/Home/HeroSection";
import Seamless from "@/components/Home/Seamless";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="lg:px-20 bg-hero">
        <HeroSection />
      </section>
      {/* About Spidex */}
      <section className="lg:px-20 py-5">
        <About />
      </section>
      <section className="lg:px-20 py-10 bg-hero">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extralight leading-snug">
            Trade your favorite tokens effortlessly {" "}
            <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
              without the native gas
            </span>
            fees or multiple click confirmation pop-ups that hold you back
          </h1>
        </div>
      </section>
      <section className="lg:px-20">
        <Seamless />
      </section>
      <section className="lg:px-20 py-10 bg-black-2">
        <FAQ />
      </section>
      <section className="lg:px-20 py-40 bg-contact-img bg-center">
        <Contact />
      </section>
    </>
  );
}
