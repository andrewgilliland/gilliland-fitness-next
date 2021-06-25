import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <div
      className="grid min-h-screen relative"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
