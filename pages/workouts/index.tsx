import Head from "next/head";
import Link from "next/link";
import { getAllWorkouts } from "../../lib/api";
import Header from "../../components/sections/Header";
import Blog from "../../components/sections/Blog";

export default function WorkoutsPage({ allWorkouts }) {
  //   const heroWorkout = allWorkouts[0];
  //   const moreWorkouts = allWorkouts.slice(1);

  return (
    <div>
      <Head>
        <title>Workouts | Gilliland Fitness</title>
      </Head>
      {/* <div>{heroWorkout && <div>{heroWorkout.title}</div>}</div> */}
      <Blog
        heading="Workouts"
        subHeading="Get weekly workouts in your inbox on how to get those gains."
        content={allWorkouts}
      />
    </div>
  );
}

export async function getStaticProps() {
  const allWorkouts = getAllWorkouts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allWorkouts },
  };
}
