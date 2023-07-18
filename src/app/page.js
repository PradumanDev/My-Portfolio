import HomeSection from "@/app/components/HomeSection";
import ScrollToTop from "@/app/components/ScrollToTop";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Blogs from "@/app/components/Blogs";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      {/* <Services /> */}
      <Projects />
      <Blogs />
      <Contact />
      <ScrollToTop />
    </>
  );
}
