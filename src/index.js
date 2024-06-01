import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Header";
import Counter from "./Counter";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <div>
     <Header></Header>
     <Counter></Counter>
  </div>
);