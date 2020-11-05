import React, { useState, useContext, createContext } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="component">
        <h1>APP COMPONENT</h1>
        <SubComponent1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent1 = (props) => {
    const { person, setPerson } = props;

    return(<div className="component">
        <h2>SUBCOMPONENT 1</h2>
        <SubComponent2 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComponent2 = (props) => {
    const {person, setPerson} = props;

    return(<div className="component">
        <h2>SUBCOMPONENT 2</h2>
        <p>Name: {person.name.title} {person.name.first} {person.name.last}</p>
        <SubComponent3 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComponent3 = (props) => {
    const {person, setPerson} = props;

    const handleLocation = ()=> {
        setPerson({
            ...person,
            location: {
                street: "222 N 22 Street",
                city: "Philadelphia",
                state: "PA"
            }
        });
    }

    const handleName = ()=> {
        setPerson({
            ...person,
            name: {
                title: "Mr",
                first: "Warren",
                last: "Longmire"
            }
        });
    }

    return(<div className="component">
        <h2>SUBCOMPONENT 3</h2>
        <p>location: {person.location.street} {person.location.city} {person.name.state}</p>
        <button onClick={handleLocation} >Change Location</button>
        <button onClick={handleName}>Change Name</button>
    </div>);
}
export default App;