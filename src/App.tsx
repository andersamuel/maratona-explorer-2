import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./assets/styles/global";
import { Switcher } from "./components/switcher";

import { Links } from "./pages/links";

import { ThemeProvider } from "styled-components";
import dark from "./assets/styles/themes/dark";
import light from "./assets/styles/themes/light";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const recoveredTheme = localStorage.getItem("theme");

    if (!recoveredTheme) {
      localStorage.setItem("theme", "light");
      setTheme(dark);
    } else if (recoveredTheme === "dark") {
      setTheme(light);
    } else setTheme(dark);

    setTimeout(() => {
      document.body.classList.add("sc-h69tZM");
    }, 0);
  }, []);

  const toggleTheme = () => {
    const recoveredTheme = localStorage.getItem("theme");

    setTheme(theme.title == "dark" ? light : dark);

    if (recoveredTheme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Links />
      <Switcher toggleTheme={toggleTheme} />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
