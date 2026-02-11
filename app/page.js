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
      <Hero />
      <AnimatedElement delay={100} duration={800}>
      <Listing/>
      </AnimatedElement>
      <AnimatedElement delay={150} duration={800}>
      <Features/>
      </AnimatedElement>
      <AnimatedElement delay={200} duration={800}>
      <Blog/>
      </AnimatedElement>
      <AnimatedElement delay={250} duration={800}>
      <Faq/>
      </AnimatedElement>
    </>
  );
}
