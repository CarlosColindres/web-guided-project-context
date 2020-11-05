import React, { useState } from 'react';
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
    const {person} = props;

    return(<div className="component">
        <h2>SUBCOMPONENT 2</h2>
        <p>Name: {person.name.title} {person.name.first} {person.name.last}</p>
        {/* <SubComponent3 person={person} setPerson={setPerson}/> */}
    </div>);
}

export default App;