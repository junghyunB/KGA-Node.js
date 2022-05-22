const { createStore } = require("redux")
const rootReducer = require("./reducers")


// applyMiddleware
// 2. combineReducers reducer를 쪼개는애
// compose
// 1. createStore


// 상태를 바꿀수 있는 함수
// useState({})

// const initalState = {
//     name: "jh",
//     board: {
//         list: [
//             {
//                 idx: 0,
//                 subject: "asdf"
//             }
//         ]
//     }
// }


// 길어지는애
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "change_name":
//             return {
//                 ...state,
//                 name: action.payload
//             }
//         case "change_subject": {
//             const newList = [...state.board.list]
//             newList[0].subject = action.payload
//             return {
//                 ...state,
//                 board: {
//                     ...state.board,
//                     list: [...newList]
//                 }
//             }
//         }
//         default:
//             return initalState
//     }
// }

const store = createStore(rootReducer) // 상태, 상태를 변경해주는 함수

/*
    dispatch 상태 바꿀때 사용하는애
    getState { } 모든 상태를 이 객체에 다담음 객체 구조
    dispatch 발동 -> reducer 발동 -> state 변경 
*/


console.log(store.getState())
// const 별풍 = { type: 'change_name', payload: "jh2" } // 별풍 : action값
// store.dispatch(별풍)
// store.dispatch({ type: "change_subject", payload: 'asdasdf' })
// console.log(store.getState())