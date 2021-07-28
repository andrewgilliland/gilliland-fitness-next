import Head from "next/head";
import Header from "@/components/sections/Header";

export default function PricingPage() {
  return (
    <div>
      <Head>
        <title>Pricing | Gilliland Fitness</title>
      </Head>
      <Header
        heading="Pricing"
        subHeading="Take control of your team."
        mainContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium dicta ut qui quas praesentium incidunt?"
      />
    </div>
  );
}
