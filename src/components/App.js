import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/softwaredev" element={<CustomSoftware />} />
          <Route path="/appdev" element={<Services />} />
          <Route path="/websitedev" element={<Services />} />
          <Route path="/revolution" element={<Services />} />
          <Route path="/about" element={<Services />} />
          <Route path="/contact" element={<Services />} />
          <Route path="/estimate" element={<Services />} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
