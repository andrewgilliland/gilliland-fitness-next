import Button from "../buttons/Button";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm() {
  return (
    <form className="grid" action="#" method="POST">
      <div className="shadow ring-1 ring-opacity-5 ring-gray-200 dark:ring-purple-600 sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white dark:bg-gray-900 space-y-6 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <Input
                name="firstName"
                label="First Name"
                type="text"
                id="firstName"
                placeholder="Jane"
                required={true}
                marginTop="mt-1"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                name="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                placeholder="Doe"
                required={true}
                marginTop="mt-1"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <Input
                name="email"
                label="Email"
                type="email"
                id="email"
                placeholder="test@example.com"
                required={true}
                marginTop="mt-1"
              />
            </div>
            <div className="col-span-6">
              <Textarea
                id="message"
                label="Message"
                placeholder="Say something here!"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 text-right sm:px-6">
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
}
