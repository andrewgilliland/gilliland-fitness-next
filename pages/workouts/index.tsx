import Head from "next/head";
import Link from "next/link";
import { getAllWorkouts } from "../../lib/api";

export default function WorkoutsPage({ allWorkouts }) {
  //   const heroWorkout = allWorkouts[0];
  //   const moreWorkouts = allWorkouts.slice(1);

  return (
    <div>
      <Head>
        <title>Workouts | Gilliland Fitness</title>
      </Head>
      <h1>Workouts</h1>
      {/* <div>{heroWorkout && <div>{heroWorkout.title}</div>}</div> */}
      {allWorkouts.map((workout, i) => (
        <div key={i}>
          <Link as={`/workouts/${workout.slug}`} href="/workouts/[slug]">
            {workout.title}
          </Link>
        </div>
      ))}
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
