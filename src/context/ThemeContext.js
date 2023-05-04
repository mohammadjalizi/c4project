import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { Theme: localStorage.getItem("mytheme")};
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, Theme: action.newValue };
    default:
      return firstState;
  }}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const toggletheme = (newName) => {
    localStorage.setItem("mytheme",newName)
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };
  return (
     <ThemeContexttt.Provider value={{ ...firstState,toggletheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;