import Container from "../../Container";
import BlogCard from "../../BlogCard";

export default function Header({ heading, subHeading }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Container>
        <section className="px-3 py-12">
          <div className="shadow px-10 py-20 rounded-lg ring-1 ring-gray-900 dark:ring-purple-600 ring-opacity-5 overflow-hidden bg-white dark:bg-gray-900">
            <h1 className="flex flex-col justify-start items-start text-center border-b-2 border-gray-100 dark:border-gray-800">
              <div className="font-bold text-4xl text-gray-900 dark:text-gray-50">
                {heading}
              </div>
              <div className="my-5 text-2xl lg:text-xl text-gray-400">
                {subHeading}
              </div>
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <BlogCard></BlogCard>
              <BlogCard></BlogCard>
              <BlogCard></BlogCard>
              <BlogCard></BlogCard>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
