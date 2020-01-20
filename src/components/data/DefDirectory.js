import PeopleDirectory from './Directory'

const listPople = PeopleDirectory.people
const listTitle = PeopleDirectory.titles

const peopleObj = { 
    directory: {
        people: listPople,
        titles: listTitle,
        filter: { 
            name: "",
            type: "",
            intern: false
        }
    }
}


export default peopleObj;
