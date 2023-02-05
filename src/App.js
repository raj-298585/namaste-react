import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./utils/store";


export const ThemeContext = createContext(null);

// App Layout
export const AppLayout = (props) => {
  return (
    <Provider store={store}> {/* registering redux store into an app*/}
      <div className="app">
        <ThemeContext.Provider value="dark">
          <Header />
          <Container />
          <Footer />
        </ThemeContext.Provider>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//overrides the root element children
root.render(<AppLayout />);
