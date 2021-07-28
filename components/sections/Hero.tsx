import Image from 'next/image'
import Container from "../Container";
import Blob from "../Blob"

export default function Hero() {
  return (
    <div className="relative">
    <Container>
      <Blob/>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">

        <div className="max-w-md">

        <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
          <span className="block text-gray-900 dark:text-gray-50 xl:inline">
            Lorem ipsum dolor sit{" "}
          </span>
          <span className="block xl:inline text-purple-600">
            amet consectetur.
          </span>
        </h1>

        
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        </div>

        
        </div>
      </main>
    </Container>
          </div>
  );
}
