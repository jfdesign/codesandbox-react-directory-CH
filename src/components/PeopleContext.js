import React, { createContext, useReducer, useEffect } from "react";
import PeopleReducer from "./PeopleReducer";
import DefPeopleDirectory from "./data/DefDirectory";

export const PeopleContext = createContext();

export default function PeopleContextProvider(props) {
  //Initialize State
  const [{ directory }, dispatch] = useReducer(
    PeopleReducer,
    DefPeopleDirectory
  );

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <PeopleContext.Provider value={{ directory, dispatch }}>
      {props.children}
    </PeopleContext.Provider>
  );
}
