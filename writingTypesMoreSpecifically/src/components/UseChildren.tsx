import { PropsWithChildren } from "../examples/children.example";

export default function UseChildren({
  children,
  color,
}: PropsWithChildren<{ color: string }>) {
  return (
    <div>
      <h1>{`color is ${color}`}</h1>
      {children}
    </div>
  );
}
