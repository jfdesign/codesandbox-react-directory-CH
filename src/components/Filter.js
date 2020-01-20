import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";
import SelectName from "./SelectName";
import SelectJobTitle from "./SelectJobTitle";
import SelectIntern from "./SelectIntern";

export default function Filter(props) {
  const { directory, dispatch } = useContext(PeopleContext);

  function updateReset() {
    dispatch({ type: "reset" });
  }

  return (
    <>
      <div
        className="filter"
        style={{
          background: "#EEE",
          padding: "30px 15px",
          textAlign: "center"
        }}
      >
        <SelectName />
        &nbsp;&nbsp;
        <SelectJobTitle />
        &nbsp;&nbsp;
        <SelectIntern />
        &nbsp;&nbsp;
        <button onClick={updateReset}>Reset</button>
      </div>
      <br />
      <b>Filter:</b> Name:{directory.filter.name} | Job Title:
      <span style={{ textTransform: "capitalize" }}>
        {directory.filter.type}
      </span>{" "}
      | Intern: {directory.filter.intern}
      {directory.people.length}
    </>
  );
}
