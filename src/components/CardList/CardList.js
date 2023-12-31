import React from "react";
import Card from "../Card/Card";
const CardList = ({ nameList, deleteFunc }) => {
  const cards = nameList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc} />
  ));
  return <div>{cards}</div>;
};
export default CardList;
