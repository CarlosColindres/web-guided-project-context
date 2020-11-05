import React, { useState, useReducer, useContext, createContext } from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<div className="component">
        <h1>APP COMPONENT</h1>
        <PersonContext.Provider value={[person, setPerson]}>
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
    const [person, setPerson] = useContext(PersonContext);

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