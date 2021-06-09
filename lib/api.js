import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const workoutsDirectory = join(process.cwd(), "_workouts");

export function getWorkoutSlugs() {
  return fs.readdirSync(workoutsDirectory);
}

export function getWorkoutBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(workoutsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllWorkouts(fields = []) {
  const slugs = getWorkoutSlugs();
  const workouts = slugs
    .map((slug) => getWorkoutBySlug(slug, fields))
    // sort workouts by date in descending order
    .sort((workout1, workout2) => (workout1.date > workout2.date ? -1 : 1));

  return workouts;
}
