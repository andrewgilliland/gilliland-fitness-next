import Button from "../buttons/Button";
import Input from "./Input";

export default function ContactForm() {
  return (
    <form className="grid" action="#" method="POST">
      <Input
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Jane"
        required={false}
      />
      <Input
        name="lastName"
        label="Last Name"
        type="text"
        id="lastName"
        placeholder="Doe"
        required={true}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        id="email"
        placeholder="test@example.com"
        required={true}
      />
      <Button type="submit">Send</Button>
    </form>
  );
}
