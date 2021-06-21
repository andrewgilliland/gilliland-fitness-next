import Button from "../buttons/Button";
import Input from "./Input";

export default function ContactForm() {
  return (
    <form className="grid md:grid-cols-5 gap-x-4 mt-5" action="#" method="POST">
      <div className="md:col-span-3">
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          required={true}
          marginTop="mt-0"
        />
      </div>
      <div className="mt-3 md:mt-0 md:col-span-2">
        <Button type="submit">Notify me</Button>
      </div>
    </form>
  );
}
