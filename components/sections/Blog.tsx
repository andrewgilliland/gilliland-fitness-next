import Container from "../Container";
import BlogCard from "../BlogCard";
import SubscribeForm from "../forms/SubscribeForm";

export default function Header({ heading, subHeading, content }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Container>
        <section className="px-3 py-12">
          <div className="shadow px-10 py-20 rounded-lg ring-1 ring-gray-900 dark:ring-purple-600 ring-opacity-5 overflow-hidden bg-white dark:bg-gray-900">

            <div className="flex flex-col lg:flex-row lg:items-center gap-x-20 pb-5 border-b-2 border-gray-100 dark:border-gray-800">
              <h1 className="flex flex-col items-start ">
                <div className="font-bold text-4xl text-gray-900 dark:text-gray-50">
                  {heading}
                </div>
                <div className="mt-5 text-2xl lg:text-xl text-gray-400">
                  {subHeading}
                </div>
              </h1>
              <SubscribeForm />
            </div>

            <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 mt-8">
              {content.map((workout, i) => (
                <BlogCard key={i} content={workout} />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
