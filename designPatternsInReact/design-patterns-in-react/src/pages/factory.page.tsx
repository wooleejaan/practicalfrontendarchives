import createButton from "@/patterns/factory";

export default function FactoryPage() {
  return (
    <div>
      {createButton("red")()}
      {createButton("blue")()}
    </div>
  );
}
