import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
//import StarRating from "./components/StarRating";
//import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
