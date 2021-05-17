import Container from "../Container";

export default function Hero() {
  return (
    <Container>
      <main className="mt-16 px-8">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Lorem ipsum dolor sit </span>
          <br />
          <span className="block text-purple-600 xl:inline">
            amet consectetur.
          </span>
        </h1>

        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </main>
    </Container>
  );
}
