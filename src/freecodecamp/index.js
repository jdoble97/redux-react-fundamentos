const { createStore } = require("redux")

// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'

//action creator
const addMessage = (message)=>{
    return {type: ADD, message}
}

//Reducer
const messageReducer = (previousState=[], action)=>{
    switch(action.type){
        case 'ADD':
            return [...previousState, action.message]
        default: 
            return previousState;
    }
}

//Vamos a crear el store
const store = createStore(messageReducer)
export default store