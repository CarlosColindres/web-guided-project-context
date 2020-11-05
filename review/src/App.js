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
    return(<div>
        <h2>SUBCOMPONENT 1</h2>
        {/* <SubComponent2 person={person} setPerson={setPerson}/> */}
    </div>);
}

export default App;