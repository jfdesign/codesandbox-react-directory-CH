import React from "react";

import Filter from "./components/Filter";
import List from "./components/List";
import PeopleContextProvider from "./components/PeopleContext";

import "./styles.css";

function App() {
  return (
    <PeopleContextProvider>
      <div className="directoryC" style={{ margin: "20px auto", width: "50%" }}>
        <Filter />

        <List />
      </div>
    </PeopleContextProvider>
  );
}

export default App;
