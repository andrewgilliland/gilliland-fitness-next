import Button from "../buttons/Button";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm() {
  return (
    <form className="grid" action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <Input
                name="firstName"
                label="First Name"
                type="text"
                placeholder="Jane"
                required={false}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <Input
                name="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                placeholder="Doe"
                required={true}
              />
            </div>
            <div class="col-span-6 sm:col-span-4">
              <Input
                name="email"
                label="Email"
                type="email"
                id="email"
                placeholder="test@example.com"
                required={true}
              />
            </div>
            <div class="col-span-6">
              <Textarea id="message" label="Message" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
}
