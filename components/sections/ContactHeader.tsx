import Container from "../Container";

export default function ContactHeader() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Container>
        <header className="px-3 py-12">
          <div className="shadow px-3 py-20 rounded-lg ring-1 ring-gray-900 dark:ring-purple-600 ring-opacity-5 overflow-hidden bg-white dark:bg-gray-900">
            <h1 className="flex flex-col justify-center items-center text-center">
              <div className="uppercase font-bold tracking-wider text-sm text-purple-600">
                Contact
              </div>
              <div className="mt-3 font-bold text-2xl lg:text-5xl dark:text-gray-50">
                Take control of your team.
              </div>
              <div className="mt-3 max-w-lg text-gray-400 text-md lg:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium dicta ut qui quas praesentium incidunt?
              </div>
            </h1>
          </div>
        </header>
      </Container>
    </div>
  );
}
