import React from "react";

const Card = ({ nameList, type }) => {
  const cards = nameList.map(({ Name, Age, Address, Phone }, idx) => (
    <div
      className="cardWrapper"
      key={idx}
      style={{ backgroundColor: type === "girl" ? "pink" : "green" }}
    >
      <p>Name: {Name}</p>
      <p>Age: {Age}</p>
      <p>Address: {Address}</p>
      <p>Phone: {Phone}</p>
    </div>
  ));
  return <div>{cards}</div>;
};
export default Card;
