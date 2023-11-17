import { ReactNode, createContext, useContext, useState } from "react";

/* types */
type ThemeType = "light" | "dark";
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

/* hooks */
const ThemeContenxt = createContext<ThemeContextType | undefined>(undefined);
const useTheme = () => {
  const context = useContext(ThemeContenxt);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/* implement provider */
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const contextValues: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContenxt.Provider value={contextValues}>
      {children}
    </ThemeContenxt.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useTheme, ThemeProvider };
