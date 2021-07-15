type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="max-w-5xl mx-auto">{children}</div>;
}
