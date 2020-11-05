import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    console.log(person);
    return(<h1>Hello World</h1>);
};

export default App;