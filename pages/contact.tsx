import Head from "next/head";
import Contact from "../components/sections/Contact";
import ContactHeader from "../components/sections/ContactHeader";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Gilliland Fitness | Contact</title>
      </Head>
      <ContactHeader />
      <Contact />
    </>
  );
}
