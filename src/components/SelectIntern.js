import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export default function SelectIntern(props) {
  const { directory, dispatch } = useContext(PeopleContext);

  function updateIntern(e) {
    dispatch({ type: "filter", payload: ["intern", e.target.checked] });
  }

  return (
    <>
      <label htmlFor="intern">
        <input
          type="checkbox"
          name="empIntern"
          id="intern"
          checked={directory.filter.intern}
          onChange={updateIntern}
        />{" "}
        Intern
      </label>
    </>
  );
}
