import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div>
        <h1>APP COMPONENT</h1>
        <SubComponent1 person={person} setPerson={setPerson}/>
    </div>);
};

export default App;