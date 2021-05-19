import Container from "../Container";

export default function ContactHeader() {
  return (
    <div className="bg-gray-100">
      <Container>
        <header className="py-12">
          <div class="py-20 rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
            <h1 className="flex flex-col justify-center items-center text-center">
              <div className="uppercase font-bold tracking-wider text-sm text-purple-600">
                Contact
              </div>
              <div className="mt-1 font-bold text-5xl">
                Take control of your team.
              </div>
              <div className="mt-1 max-w-lg text-gray-400 text-xl">
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
