const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Namaste React!"
);
const heading2 = React.createElement(
  "h2",
  { className: "heading2" },
  "Namaste React!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//overrides the root element children
root.render(container);
