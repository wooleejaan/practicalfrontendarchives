import MyIndependentComponentWithToggle from "@/patterns/hoc/independentHOCWithChildrenProps";
import MyDependentComponentWithToggle from "@/patterns/hoc/dependentHOCWithChildrenProps";

export default function HigherOrderComponentPage() {
  return (
    <div>
      <MyIndependentComponentWithToggle color="red" />
      <MyDependentComponentWithToggle />
    </div>
  );
}
