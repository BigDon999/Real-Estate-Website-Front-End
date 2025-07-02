import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Listing from "./components/Listing";
import Features from "./components/Features";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import AnimatedElement from "./components/AnimatedElement";

export default function Home() {
  return (
    <>
      <AnimatedElement delay={0} duration={1000}>
      <Hero />
      </AnimatedElement>
      <AnimatedElement delay={200} duration={1000}>
      <Listing/>
      </AnimatedElement>
      <AnimatedElement delay={400} duration={1000}>
      <Features/>
      </AnimatedElement>
      <AnimatedElement delay={600} duration={1000}>
      <Blog/>
      </AnimatedElement>
      <AnimatedElement delay={800} duration={1000}>
      <Faq/>
      </AnimatedElement>
    </>
  );
}
