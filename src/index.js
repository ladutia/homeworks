import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import App from "./components/App";
import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
>>>>>>> homework-6
