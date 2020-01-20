import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export default function SelectJobTitle(props) {
  const { directory, dispatch } = useContext(PeopleContext);

  function jobTypes() {
    return directory.titles.map(function(job, i) {
      return (
        <option value={job.key} key={i}>
          {job.display}
        </option>
      );
    });
  }

  function updateJobTitle(e) {
    dispatch({ type: "filter", payload: ["jobtype", e.target.value] });
  }

  return (
    <>
      Job Title
      <select
        name="empJobType"
        value={directory.filter.type}
        onChange={updateJobTitle}
      >
        <option value="">- Select -</option>
        {jobTypes()}
      </select>
    </>
  );
}
