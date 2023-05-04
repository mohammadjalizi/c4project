import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { Theme: "light" };
const reducer = () => {}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  return (
     <ThemeContexttt.Provider value={{ ...firstState}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;