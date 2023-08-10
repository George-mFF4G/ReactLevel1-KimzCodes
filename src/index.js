import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App/App";
// import { createRoot } from "react-dom/client";
ReactDom.render(
  // <StrictMode>
  <App />,
  // </StrictMode>
  document.getElementById("root")
);
//// for react V18
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
