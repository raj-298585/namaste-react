import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const ThemeContext = createContext(null);

// App Layout
const AppLayout = (props) => {
  return (
    <div className="app">
      <ThemeContext.Provider value="dark">
        <Header />
        <Container />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//overrides the root element children
root.render(<AppLayout />);
