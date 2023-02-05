import { render } from "@testing-library/react";
import Header from "../components/Header.js";
import { Provider } from "react-redux";
import store from "../utils/store";
// import { StaticRouter } from "react-router-dom/server";

test("load logo in the heaader", () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  //console.log(header);
  const logo = 'https://www.logodesignteam.com/images/portfolio-images/kitchen-cookery-logo-design/kitchen-cookery-logo-design7.jpg';
  expect(header.getAllByTestId("logo")[0].src).toBe(logo);

});


test("Cart should have 0 items", () => {
    const header = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(header.getByTestId("cart").innerHTML).toBe("Cart - 0 Items");
  });