import Head from "next/head";
import { useRouter } from "next/router";
import { getWorkoutBySlug, getAllWorkouts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ workout, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !workout?.slug) {
    return <div>error</div>;
  }
  return (
    <div>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <Head>
            <title>{workout.title} | Gilliland Fitness</title>
            <meta property="og:image" content={workout.ogImage.url} />
          </Head>
          <article className="mb-32">
            <h1>{workout.title}</h1>
            <div>{workout.coverImage}</div>
            <div>{workout.date}</div>
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const workout = getWorkoutBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(workout.content || "");

  return {
    props: {
      workout: {
        ...workout,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const workouts = getAllWorkouts(["slug"]);

  return {
    paths: workouts.map((workout) => {
      return {
        params: {
          slug: workout.slug,
        },
      };
    }),
    fallback: false,
  };
}
