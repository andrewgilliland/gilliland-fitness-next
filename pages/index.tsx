import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Feature from "@/components/sections/Feature";
import CTA from "@/components/sections/CTA";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Gilliland Fitness</title>
      </Head>
      <Hero />
      <Feature
        heading="Workouts"
        subHeading="A better way to get workouts"
        mainContent="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
      />
      <CTA />
    </div>
  );
}
