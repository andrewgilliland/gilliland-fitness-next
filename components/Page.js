import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div
      className="grid min-h-screen"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
