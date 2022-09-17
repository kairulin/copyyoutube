import './App.css';
import Main from './pages/Main';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import React,{ useState } from 'react';
export const ThemeContext = React.createContext(null)

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <div className="App">
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
          <Main />
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
