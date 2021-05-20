import Head from "next/head";
import CTA from "../components/sections/generics/CTA";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gilliland Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CTA />
    </div>
  );
}
