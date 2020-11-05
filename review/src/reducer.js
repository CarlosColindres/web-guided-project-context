
export const setName = (title, first, last) {
    return({type:SET_NAME, payload:{title, first, last}});
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