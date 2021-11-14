import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Home</div>}>
            <Route path="/services" element={<div>services</div>} />
            <Route path="/customsoftware" element={<div>services</div>} />
            <Route path="/mobileapps" element={<div>services</div>} />
            <Route path="/websites" element={<div>services</div>} />
            <Route path="/revolution" />
            <Route path="/about" element={<div>services</div>} />
            <Route path="/contact" element={<div>services</div>} />
            <Route path="/estimate" element={<div>services</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
