import React, { useState, useReducer, useContext, createContext } from 'react';
import {reducer, setName, setLocation} from './reducer';

import data from './data';

const PersonContext = createContext();

const App = ()=> {
    // const [person, setPerson] = useState(data);
    const [person, dispatch] = useReducer(reducer, data);

    return(<div className="component">
        <h1>APP COMPONENT</h1>
        {/* <PersonContext.Provider value={[person, setPerson]}> */}
        <PersonContext.Provider value={[person, setName, setLocation, dispatch]}>
            <SubComponent1/>
        </PersonContext.Provider>
    </div>);
};

const SubComponent1 = () => {
    return(<div className="component">
        <h2>SUBCOMPONENT 1</h2>
        <SubComponent2/>
    </div>);
}

const SubComponent2 = () => {
    const [person] = useContext(PersonContext);

    return(<div className="component">
        <h2>SUBCOMPONENT 2</h2>
        <p>Name: {person.name.title} {person.name.first} {person.name.last}</p>
        <SubComponent3/>
    </div>);
}

const SubComponent3 = () => {
    const [person, setName, setLocation, dispatch] = useContext(PersonContext);

    const handleLocation = ()=> {
        // setPerson({
        //     ...person,
        //     location: {
        //         street: "222 N 22 Street",
        //         city: "Philadelphia",
        //         state: "PA"
        //     }
        // });
        dispatch(setLocation("222 N 22nd Street", "Philly", "PA"));
    }

    const handleName = ()=> {
        // setPerson({
        //     ...person,
        //     name: {
        //         title: "Mr",
        //         first: "Warren",
        //         last: "Longmire"
        //     }
        // });
        dispatch(setName("Mr", "Warren", "Longmire"));
    }

    return(<div className="component">
        <h2>SUBCOMPONENT 3</h2>
        <p>location: {person.location.street} {person.location.city} {person.name.state}</p>
        <button onClick={handleLocation} >Change Location</button>
        <button onClick={handleName}>Change Name</button>
    </div>);
}
export default App;