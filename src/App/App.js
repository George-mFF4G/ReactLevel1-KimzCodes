import React, { useState, useRef } from "react";
import styles from "./App.module.css";
import CardList from "../components/CardList/CardList";
import Filter from "../components/filter/Filter";
const App = () => {
  // const inputEl = useRef(null);
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [state, setState] = useState([
    {
      id: 1,
      Name: "kareem",
      Age: 31,
      Address: "Hadyek Alahram",
      phone: "01234567891",
      type: "boy",
    },
    {
      id: 2,

      Name: "kareem2",
      Age: 32,
      Address: "Hadyek Alahram",
      phone: "01234567891",
      type: "girl",
    },
    {
      id: 3,

      Name: "kareem3",
      Age: 33,
      Address: "Hadyek Alahram",
      phone: "01234567891",
      type: "boy",
    },
  ]);
  const deleteHandler = (e, selectedID) => {
    // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
    // setState(deleteOberation);
    setState((prevState) => {
      return prevState.filter((e) => e.id !== selectedID);
    });
  };
  const filterName = (name) => {
    // console.log(name);
    setFilter(name);
  };
  const namesHandler = () => {
    console.log(filter);
    if (filter.length !== 0) {
      return state.filter((el) => el.Name.includes(filter));
    }
    return state;
  };
  // const toggleHandler = () => {
  // setCardToggle(!cardToggle);
  // };
  // const testHandler = () => {
  //   console.log(inputEl.current.value);
  // };
  // const onclick = () => {
  //   inputEl.current.focus();
  // };
  return (
    <div className={styles.mainContainer}>
      <h1>boys</h1>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => setCardToggle(!cardToggle)}
      >
        {cardToggle ? "hide names" : "show names"}
      </button>
      <Filter filteration={filterName} />
      <div className={cardToggle ? styles.show : styles.hide}>
        <CardList nameList={namesHandler()} deleteFunc={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
