import Container from "../Container";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="bg-gray-100 mx-auto py-6 sm:px-6 lg:px-8">
      <Container>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                accusamus magni aliquam quis, adipisci voluptatum.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
