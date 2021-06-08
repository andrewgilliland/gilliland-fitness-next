import Container from "../../Container";
import Button from "../../buttons/Button";

export default function CTA() {
  return (
    <div>
      <Container>
        <div className="mx-auto py-12 px-4 sm:px-6 md:py-16 md:px-8 md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-purple-600">Get started today.</span>
          </h2>
          <div className="mt-8 space-x-3 flex lg:mt-0 lg:flex-shrink-0">
            <Button role="button">Get started</Button>
            <Button role="button" secondary={true}>
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
