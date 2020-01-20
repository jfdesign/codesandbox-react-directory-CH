import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export default function List(props) {
  const { directory } = useContext(PeopleContext);

  function getPeople() {
    return directory.people.map(function(person, i) {
      return (
        <div className="person" key={i}>
          <h2>
            {person.name} | {person.title_cat}
          </h2>
          <div className="content">
            <img
              src={person.img}
              style={{ float: "right", width: "20%" }}
              alt=""
            />
            <div className="bio">{person.bio}}</div>
          </div>
        </div>
      );
    });
  }

  return <div className="listC">{getPeople()}</div>;
}
