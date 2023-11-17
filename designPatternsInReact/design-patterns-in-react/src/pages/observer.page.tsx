import { useTheme } from "@/patterns/observer";

export default function ObserverPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="button" type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div className="view">{theme}</div>
    </div>
  );
}
