const SET_NAME = "SET_NAME";
const SET_LOCATION = "SET_LOCATION";

export const setName = (title, first, last) => {
    return({type:SET_NAME, payload:{title, first, last}});
}

// returns for setName("Mr", "Warren", "Longmire")
// {
//     type: "SET_NAME",
//     payload: {
//         title:"Mr",
//         first:"Warren",
//         last: "Longmire"
//     }
// }


export const setLocation = (street, city, state) => {
    return({type:SET_LOCATION, payload:{street, city, state}});
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_NAME):
            return({...state, name:action.payload});
        case(SET_LOCATION):
            return({...state, location:action.payload});
        default:
            return(state);
    }
}