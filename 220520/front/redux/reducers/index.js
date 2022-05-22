const { combineReducers } = require("redux")
const board = require("./boardReducer")

const rootReducer = combineReducers({
    board, 
    name: (state, action) => {
        return "jh2"
    }
})

// const rootReducer = (state = initalState, action) => {
//     switch(action.type) {
//         case "change_name" : {

//         }
//         case "change_subject": {

//         }

//         default: return state
//     }
// }

/*
redux -> createStore -> store
react-redux / provider, useSelector, useDispatch

store.getState() <- useSelector
store.dispatch() <- useDispatch

*/

module.exports = rootReducer