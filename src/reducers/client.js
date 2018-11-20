import {LOAD_CLIENT_DATA,SELECT_CLIENT} from '../actions/clientAction';
import data from '../data/clients.json'

const defaultState = {
    clients: data,
    selectedClient : 0
}
const reducerFunctions = { 
    [LOAD_CLIENT_DATA] : (state,action) => ({
        ...state, //takes the state and adds into a new obj and overrides clients with action.payload
        clients: action.payload
    }),
    [SELECT_CLIENT]: (state, action) => ({
        ...state, //takes the state and adds into a new obj and overrides clients with action.payload
        selectedClient: action.payload
    })
}


const reducer = (state = defaultState ,action) => {
    const func =  reducerFunctions[action.type]; // checking to see if we handle the type of action that was passed to us
    if (func) {
        return func(state,action);
    }
    return state;
    //basic reducer
}

export default reducer;