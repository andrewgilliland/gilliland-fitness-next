import Header from "./Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* TODO: Add Footer */}
    </>
  );
}
