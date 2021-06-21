import Link from "next/link";

export default function BlogCard({ content }) {
  return (
    <div>
      <div className="text-gray-400 text-gray-400">{content.date}</div>
      <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50 mt-2">
        {content.title}
      </h3>
      <p className="text-gray-400 my-3">{content.excerpt}</p>
      <Link as={`/workouts/${content.slug}`} href="/workouts/[slug]">
        <a className="font-semibold text-purple-500">Read full workout</a>
      </Link>
    </div>
  );
}
