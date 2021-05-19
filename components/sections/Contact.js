import Container from "../Container";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="bg-gray-100 mx-auto py-6 sm:px-6 lg:px-8">
      <Container>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Contact
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                accusamus magni aliquam quis, adipisci voluptatum.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
