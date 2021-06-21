import Head from "next/head";
import Link from "next/link";
import { getAllWorkouts } from "../../lib/api";
import Header from "../../components/sections/generics/Header";
import Blog from "../../components/sections/generics/Blog";

export default function WorkoutsPage({ allWorkouts }) {
  //   const heroWorkout = allWorkouts[0];
  //   const moreWorkouts = allWorkouts.slice(1);

  return (
    <div>
      <Head>
        <title>Workouts | Gilliland Fitness</title>
      </Head>
      <Header
        heading="Workouts"
        subHeading="Take control of your team."
        copy="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta ut qui quas praesentium incidunt?"
      />
      {/* <div>{heroWorkout && <div>{heroWorkout.title}</div>}</div> */}
      {allWorkouts.map((workout, i) => (
        <div key={i}>
          <Link as={`/workouts/${workout.slug}`} href="/workouts/[slug]">
            {workout.title}
          </Link>
        </div>
      ))}
      <Blog heading="Workouts" subHeading="Get weekly workouts in your inbox on how to get those gains."/>
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
