import Head from "next/head";
import Hero from "../components/sections/Hero";
import Feature from "../components/sections/generics/Feature";
import CTA from "../components/sections/generics/CTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gilliland Fitness</title>
      </Head>
      <Hero />
      <Feature />
      <CTA />
    </div>
  );
}
