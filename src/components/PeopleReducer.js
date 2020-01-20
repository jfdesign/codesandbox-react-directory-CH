import PeopleDirectory from "./data/DefDirectory";

const listPople = PeopleDirectory.people;

export default function PeopleReducer(state, action) {
  switch (action.type) {
    case "reset":
      return PeopleDirectory;

    case "filter":
      //Get the Current Filter Values
      let filterName = state.directory.filter.name;
      let filterJobType = state.directory.filter.type;
      let filterIntern = state.directory.filter.intern;

      //Get the requested filter change
      const filterType = action.payload[0];
      const filterValue = action.payload[1];

      //Update The Filter Values
      switch (filterType) {
        case "name":
          filterName = filterValue;
          break;
        case "jobtype":
          filterJobType = filterValue;
          break;
        case "intern":
          filterIntern = filterValue;
          break;
        default:
        // code block
      }

      //Filter the Directory
      const filterDirectory = listPople.filter(function(person) {
        return (
          (filterName === "" ||
            person.name.toLowerCase().indexOf(filterName.toLowerCase()) !==
              -1) &&
          (filterJobType === "" || person.title_cat === filterJobType) &&
          (filterIntern === false || person.intern === filterIntern)
        );
      });

      return {
        directory: {
          ...state.directory,
          people: filterDirectory,
          filter: {
            name: filterName,
            type: filterJobType,
            intern: filterIntern
          }
        }
      };

    default:
      return state;
  }
}
