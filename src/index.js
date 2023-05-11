import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import Intro from './intro';
import GlobalStyle from "./styles/GlobalStyles";

const catTheme = {
  textColor:"white",
  backgroundColor:"black "
}

const dogTheme = {
  textColor:"black",
  backgroundColor:"white "
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={catTheme}>
      <GlobalStyle/>
    <Intro />
    {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);
