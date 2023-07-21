import React from "react";
import "./App.css";
import Card from "./Card";
const App = () => {
  const boys = [
    {
      Name: "kareem",
      Age: 31,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
    {
      Name: "kareem2",
      Age: 32,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
    {
      Name: "kareem3",
      Age: 33,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
  ];
  const girls = [
    {
      Name: "kareema",
      Age: 31,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
    {
      Name: "kareem2a",
      Age: 32,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
    {
      Name: "kareem3a",
      Age: 33,
      Address: "Hadyek Alahram",
      phone: "01234567891",
    },
  ];
  return (
    <div className="mainContainer">
      <h1>boys</h1>
      <Card nameList={boys} type="men" />
      <h1>girls</h1>
      <Card nameList={girls} type="girl" />
    </div>
  );
};

export default App;
