import Head from "next/head";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Gilliland Fitness | Contact</title>
      </Head>
      <Header
        heading="contact"
        subHeading="Take control of your team"
        mainContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium dicta ut qui quas praesentium incidunt?"
      />
      <Contact />
    </>
  );
}
