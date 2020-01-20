import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export default function SelectName(props) {
  const { directory, dispatch } = useContext(PeopleContext);

  function updateEmpName(e) {
    //handleFilter(e)

    const name = e.target.value;

    dispatch({ type: "filter", payload: ["name", name] });
  }

  return (
    <>
      Name:{" "}
      <input
        type="text"
        name="empName"
        placeholder="Name of employee"
        value={directory.filter.name}
        onChange={updateEmpName}
      />
    </>
  );
}
