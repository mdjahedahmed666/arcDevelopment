import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './ui/Footer';
import LandingPage from './LandingPage';

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route exact path="/" element={<LandingPage/>}>
            <Route path="/services" element={<div>services</div>} />
            <Route path="/softwaredev" element={<div>services</div>} />
            <Route path="/appdev" element={<div>services</div>} />
            <Route path="/websitedev" element={<div>services</div>} />
            <Route path="/revolution" />
            <Route path="/about" element={<div>services</div>} />
            <Route path="/contact" element={<div>services</div>} />
            <Route path="/estimate" element={<div>services</div>} />
          </Route>
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
