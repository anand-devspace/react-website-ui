import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Home from "./pages/Home";

// useEffect(() => {
// const darkTheme = createTheme({
//   palette: {
//     mode: colorMode?colorMode:"light",
//   },
// });
// },[colorMode]);

const App = () => {
  const [colorMode, setColorMode] = useState("light");
  console.log("color mode:", colorMode);
  const darkTheme = createTheme({
    palette: {
      mode: colorMode?colorMode:"light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div className="App">
          <Home colorTheme={(mode) => { setColorMode(mode)}} />
        </div>
    </ThemeProvider>
  );
}

export default App;
