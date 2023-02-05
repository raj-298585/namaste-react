import { render } from "@testing-library/react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../utils/store";

test("Add an item to cart", () => {
  const app = render(
    <Provider store={store}>
      <Header />
      <Container />
      <Footer />
    </Provider>
  );
  //console.log(app);
});
