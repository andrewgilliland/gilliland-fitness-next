import Container from "../Container";

export default function Hero() {
  return (
    <Container>
      <main className="mt-16 px-8">
        <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
          <span className="block text-gray-900 dark:text-gray-50 xl:inline">
            Lorem ipsum dolor sit{" "}
          </span>
          <span className="block text-purple-600 xl:inline">
            amet consectetur.
          </span>
        </h1>

        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </main>
    </Container>
  );
}
