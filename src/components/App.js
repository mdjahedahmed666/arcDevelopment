import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br /> Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
            Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
            Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br /> Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
            Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
            Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br /> Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
            Home i lobe bd <br />
            im <br /> breakpointsbr <br /> sdhfg <br />
          </div>}>
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
        <Footer />
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
